import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.bloco}>
                <Text style={styles.Texto}>Seja bem Vindo</Text>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Itanhaem' as never)}
                >
                    <Text style={styles.textoBtn}>Itanhaém</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Mongagua' as never)}
                >
                    <Text style={styles.textoBtn}>Mongaguá</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Peruibe' as never)}
                >
                    <Text style={styles.textoBtn}>Peruíbe</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('PraiaGrande' as never)}
                >
                    <Text style={styles.textoBtn}>Praia Grande</Text>
                </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    Texto:{
        fontSize:50,
        marginBottom: 100,
    },
    btn:{
       backgroundColor:"#820000",
       width:'80%',
       padding:10,
       marginBottom:20,
       marginTop: 20,
       borderRadius: 5
    },
    textoBtn:{
        color:'#fff',
        fontSize:30,
        textAlign:'center'
    }
}); 