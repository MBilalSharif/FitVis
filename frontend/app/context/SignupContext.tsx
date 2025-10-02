import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your signup data
export type SignupData = {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  gender?: string;
  age?: number;
  height?: number;
  weight?: number;
  weightUnit?: string;
  exerciseFrequency?: string;
  goal?: string;
};

// Context type
type SignupContextType = {
  signupData: SignupData;
  setSignupData: React.Dispatch<React.SetStateAction<SignupData>>;
  updateData: (newData: Partial<SignupData>) => void;
  resetData: () => void;
};

// Create context
const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Provider component
export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [signupData, setSignupData] = useState<SignupData>({});

  // Update partial data
  const updateData = (newData: Partial<SignupData>) => {
    setSignupData(prev => ({ ...prev, ...newData }));
  };

  // Reset all data
  const resetData = () => {
    setSignupData({});
  };

  return (
    <SignupContext.Provider value={{ signupData, setSignupData, updateData, resetData }}>
      {children}
    </SignupContext.Provider>
  );
};

// Custom hook for usage
export const useSignup = (): SignupContextType => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};
