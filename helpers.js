import { Alert } from "react-native";
import { API_URL } from "./Config";

export async function fetchPublishableKey() {
  try {
    const response = await fetch(`http://98.163.13.253:3000/config`);
    //console.log(JSON.stringify(response));

    const { publishableKey } = await response.json();

    return publishableKey;
  } catch (e) {
    console.log(e);
    console.warn("Unable to fetch publishable key. Is your server running?");
    Alert.alert(
      "Error",
      "Unable to fetch publishable key. Is your server running?"
    );
    return null;
  }
}
