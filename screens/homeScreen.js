import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks:[],
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },

          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchPressed:true });
            this.getWord(this.state.text)
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
         <View>
          {this.state.chunks.map(item => {
            return(
              <TouchableOpacity
              style={styles.result
              }
              >
              <Text
              style={styles.displayText}
              >{item}</Text>
              </TouchableOpacity>
            )
          })}          
         </View>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
    );
  }
}
    <TextInput
    style={styles.inputBox}
    onChageText={text => {
        this.setState({
            text: text,
            isSearchPressed: false,
            word :"Loading..."
            lexicalCategory :'',
            examples : [],
            defination:"",
        });
    }}
    />
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        //console.log(url)
        return fetch(url)
        .then((data)=>{
            if(data.status===200)
            {
                return data.json()
            }
            else{
                return null
            }
            <View style ={styles.outputContainer}>
            <Text style= {{fontSize:20}}>
            {
                this.state.isSearchPressed&& this.word.state === "loading"
                ?this.word.state:""
            }
            </Text>
            </View>
            {
                this.word.state!==""?
                (
                    <View style={style.details}>
                        <Text style={styles.detailsTitle}>
                            Word:{""}
                        </Text>
                        <Text style={{fontSize:18}}>
                            {this.state.word}
                        </Text>
                    </View>

                )
            }
        })
        then((response)=>{
            
            var responseObject = response

            if(respponseObject){
                var wordData = responseObject.definitions[0]

                vardefinition=wordData.description;
                var lexicalCategory=wordData.wordtype
                
            })
            
        }
        else{
            this.setState({
                "word" :this.state.text,
                "definition" :"NotFound"
            })
        }
    }

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  result:{
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
    height: 80,
    textAlign: 'center',
    outline: 'none',
  },
});
