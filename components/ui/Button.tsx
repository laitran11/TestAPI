import { Pressable, PressableProps, Text, StyleSheet } from "react-native";

interface ButtonProps extends PressableProps{
    title: string;
    color?: string;
}

const ButtonOboarding:React.FC<ButtonProps> = ({title, onPress}) =>{
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
   button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: "90%",
    borderRadius: 20,
    backgroundColor: '#008000',
   },
   buttonText:{
        alignContent: "center",
        fontFamily: "Poppins-Bold",
        fontSize: 19,
        lineHeight: 27, 
        color: '#ffff',
   }
});
export default ButtonOboarding;