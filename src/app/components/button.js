import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export function Button({src, name}) {
    return (

        <Link href={src} asChild>
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.text}> 
                    {name}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });