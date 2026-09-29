const classes = [
"7X DT4",
"7X DT5",
"7X DT2",
"7W DT4",
"7W DT2",
"8W DT2",
"8W DT4",
"8W DT5",
"8X DT2",
"8X DT4",
"9W DT2",
"9W DT4",
"9X DT2",
"9X DT4",
"9X DT5",
"10B CN1",
"10D CN1"
];
 
function createDefaultData(className){
 
if(localStorage.getItem(className)) return;
 
localStorage.setItem(
className,
JSON.stringify({
topic:"",
lesson:"",
progress:"On Track",
notes:"",
actions:"",
homework:"",
assessment:""
})
);
 
}
 
classes.forEach(createDefaultData);
