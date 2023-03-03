import AsyncStorage from "@react-native-async-storage/async-storage"


export async function setCred(username: string, password: string) {
    // Store the credentials

    await AsyncStorage.setItem('ass','value')
}

export async function getCred() {
    return await AsyncStorage.getItem('ass')
}
