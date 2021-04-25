import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMobileNumber = async () => {
  let mobileNumber;
  try {
    let value = await AsyncStorage.setItem("mobileNumber", "9080743232");
    // AsyncStorage.removeItem("mobileNumber");
  } catch (e) {}

  try {
    mobileNumber = await AsyncStorage.getItem("mobileNumber");
    console.log(mobileNumber);
  } catch (e) {}

  return mobileNumber;
};
