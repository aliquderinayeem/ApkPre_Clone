const getStoredApps=()=>{
    const storedAppsSTR=localStorage.getItem("appsList");
    if(storedAppsSTR){
        const storedAppsData=JSON.parse(storedAppsSTR);
        return storedAppsData;
    }else{
        return [];
    }
}
const addToStorage=(id)=>{
    const storedAppsData=getStoredApps();
    if(storedAppsData.includes(id)){
        alert("already installed")
    }else{
        storedAppsData.push(id);
        const AppData=JSON.stringify(storedAppsData);
        localStorage.setItem("appsList",AppData)
    }
}
export {getStoredApps,addToStorage}