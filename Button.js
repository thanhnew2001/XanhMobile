import React from 'react';
import { Text, View , Button} from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
      
     <Button title='hello' onPress={()=>alert('hello')}/>
      
    <Button title="goodbye"   onPress={()=>alert('goodbye')}/>
    
    <Button title="ok"  onPress={()=>alert('ok')}/>
    
    <Button title='good day' onPress={()=>alert('good day')}/>
    
    <Button title='good night'  onPress={()=>alert('good night')}/>
    
    <Button title='click'  onPress={()=>alert('click')}/>
       
    <Button title='hihi'  onPress={()=>alert('hihi')}/>
        
    <Button title='lol'  onPress={()=>alert('lol')}/>
      
    <Button title='🙂'  onPress={()=>alert('🙂')}/>
   
    <Button title='🥰'  onPress={()=>alert('🥰')}/>
    
    <Button title='😘'  onPress={()=>alert('😘')}/>
    
    <Button title='😰'  onPress={()=>alert('😰')}/>
       
    <Button title='❤️'  onPress={()=>alert('❤️')}/>
    </View>
  );
}

export default YourApp;
