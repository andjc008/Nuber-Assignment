import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Storage } from "@aws-amplify/storage"



function App({ signOut }) {


  async function onChangeFunction(e) {
    if (!e.target.files[0]) return
    //Clear bucket
    const file = e.target.files[0];
    await Storage.put(file.name, file, {
      level: "private"
    });
  }




  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>Logged In</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
      <input type="file" onChange={onChangeFunction}></input>
    </View>
  );
}

export default withAuthenticator(App);