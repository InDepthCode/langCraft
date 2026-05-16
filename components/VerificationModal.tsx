import React, { useState, useRef } from "react";
import { ActivityIndicator, Modal, StyleSheet, KeyboardAvoidingView, Platform, TextInput, View as RNView } from "react-native";
import { View, Text, Pressable } from "@/tw";
import { useRouter } from "expo-router";


interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
}

export function VerificationModal({ visible, onClose, onVerify }: VerificationModalProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const router = useRouter();

  const handleInput = async (text: string, index: number) => {
    // Only allow numbers
    if (text && !/^\d+$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    setError(null);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all digits are entered, call onVerify
    if (text && index === 5 && newCode.every(digit => digit !== "")) {
      const fullCode = newCode.join("");
      setLoading(true);
      try {
        await onVerify(fullCode);
        onClose();
      } catch (err: any) {
        console.error("Verification failed:", err);
        setError(err.errors?.[0]?.message || "Invalid code. Please try again.");
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      } finally {
        setLoading(false);
      }
    }
  };


  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 justify-end" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContent}
        >
          <RNView style={styles.innerContainer}>
            <View className="w-12 h-1.5 bg-neutral-200 rounded-full mb-8" />
            <Text className="text--h2 text-center mb-2">Verify your email</Text>
            <Text className="text--body-md text-center text-neutral-text-secondary mb-6">
              Enter the 6-digit code we sent to your email address to continue.
            </Text>

            {error && (
              <Text className="text-red-500 text-sm mb-4 text-center">{error}</Text>
            )}

            {loading ? (
              <View className="h-20 items-center justify-center">
                <ActivityIndicator size="large" color="#6C4EF5" />
              </View>
            ) : (
              <RNView style={styles.otpContainer}>
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    style={[
                      styles.otpInput,
                      digit ? styles.otpInputActive : null,
                      error ? { borderColor: "#FF4D4F" } : null
                    ]}
                    value={digit}
                    onChangeText={(text) => handleInput(text.slice(-1), index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    autoFocus={index === 0}
                    editable={!loading}
                  />
                ))}
              </RNView>
            )}


            <Pressable className="py-2 mt-4" onPress={() => {}}>
              <Text className="text-brand-purple font-poppins-semibold">Resend Code</Text>
            </Pressable>
            
            <Pressable className="mt-6 py-4 w-full items-center" onPress={onClose}>
              <Text className="text-neutral-text-secondary">Cancel</Text>
            </Pressable>
          </RNView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 32,
    paddingBottom: Platform.OS === "ios" ? 48 : 32,
  },
  innerContainer: {
    alignItems: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  otpInput: {
    width: 45,
    height: 56,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#0D132B",
    fontFamily: "Poppins-Bold",
  },
  otpInputActive: {
    borderColor: "#6C4EF5",
  },
});
