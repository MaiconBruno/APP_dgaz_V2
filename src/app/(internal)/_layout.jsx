import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="home" 
            options={{
                title: "Inicio"
            }}/>
            <Tabs.Screen name="payment" 
            options={{
                title: "Pagamento"
            }}/>
            <Tabs.Screen name="contact" 
            options={{
                title: "Contato"
            }}/>
        </Tabs>
    )
}