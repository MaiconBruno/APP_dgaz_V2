import { useState } from "react";
import { Redirect } from "expo-router";

export default function Login(){

    [auth, setAuth] = useState(false);

    if (auth === true) {
        return <Redirect href="/home" />;
    }else{
        return <Redirect href="/sing-up" />;
    }
    return(
        null
    )
}