import { useTheme } from '@react-navigation/native';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from "react-native-paper";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    disabled?: boolean;
    width?:any
    marginVertical?:any
    isLoading?: boolean;
    icon?:string;
    mode?: "text" | "contained" | "outlined" | "elevated" | "contained-tonal"
}

const CustomButton = ({title, onPress, style, disabled, width, marginVertical, isLoading, icon, mode}:CustomButtonProps) => {
  const {colors} = useTheme();
  return (
    <Button 
      icon={icon}
      mode={mode || "contained"}
      onPress={onPress}
      style={[style,{marginVertical:marginVertical, width:width}]}
      disabled={disabled}
      loading={isLoading}
      textColor={colors.background}
      buttonColor={colors.primary}
      labelStyle = {{fontWeight:'bold'}}
    >
     {title}
    </Button>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
/*
    <Button
    title={title}
    onPress={onPress}
    disabled={disabled}
    buttonStyle={[styles.con, style, 
      {marginVertical: marginVertical ? marginVertical : 0},
      {backgroundColor: colors.primary},
    ]}
    titleStyle={{fontSize:16, color: colors.background, textAlign:"center", fontWeight:"bold"}}
    containerStyle={{width: width ? width : '100%', alignSelf:'center'}}
    loading={isLoading}
    icon={icon ? {name: icon.name, type: icon.type, color: colors.background, size:15} : undefined}
    />
    */