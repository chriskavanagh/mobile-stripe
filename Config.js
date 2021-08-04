import { Platform } from "react-native";
import ENV from "react-native-config";

// Address to stripe server running on local machine
export const LOCAL_URL =
  Platform.OS === "android"
    ? "http://http://98.163.13.253:3000"
    : "http://localhost:3000";

export const API_URL = ENV.API_URL ? ENV.API_URL : LOCAL_URL;
