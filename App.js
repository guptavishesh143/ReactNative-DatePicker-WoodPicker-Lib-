import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
 

  } from "react-native";

import { DatePicker } from "react-native-woodpicker";

export default function CouponsOpen({ navigation }) {
  //Fetching Todays Date
  var Tdate = new Date().getDate();
  var Tmonth = new Date().getMonth() + 1;
  var Tyear = new Date().getFullYear();
  var Lastyear = new Date().getFullYear() - 1;
  const selectDate = Tdate + "/" + Tmonth + "/" + Tyear;

  //Use States
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [InitialDate, setInitialDate] = useState("");


  useEffect(() => {
    setInitialDate(selectDate);
    
  }, []);
  


  //Date Onchange Function
  const onChange = ( selectedDate) => {
   // console.log(date)
    const currentDate = selectedDate 
    setDate(currentDate);
    let sdate =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();
      setInitialDate(sdate);

    
  };

 



  function DatePickerPlaceHolder() {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            padding: 12,
            backgroundColor: "green",
            justifyContent:"space-between",
            borderTopRightRadius: 20,
          }}
        >
          <View >
            <Text style={{ color: "white", fontSize: 16 }}>
              Click here to change Date
            </Text>
          </View>

        <View>
        <View style={{flexDirection:'row',justifyContent:'flex-start',paddingHorizontal:20}}>
         <View style={{paddingRight:4}}>
            <Image
              source={require("../Assets/cal.png")} //Note: You have to Import Your Asset here
              style={{ height: 20, width: 20 }}
              resizeMode={"contain"}
            />
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {InitialDate}
            </Text>
          </View>
         </View>
        </View>
        </View>
      </>
    );
  }
 

  return (
    <>     
      <View
          style={{
            paddingVertical: 20,paddingRight:10
          }}
        >
        
            <DatePicker
              placeholder={DatePickerPlaceHolder()}
              onDateChange={onChange}
              value={date}
              title="Date Picker"
              iosPickerMode="date"
            />
          
        </View>    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },

});
