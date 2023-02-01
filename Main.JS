Webcam.set({
    width:450,
    width:450,
    image_format:"png",
    png_quality:90

})
camera=document.getElementById("camera")
Webcam.attach('#camera')

function picture(){
    Webcam.snapfunction(mace){
        document.getElementById("result").innerHTML='<img id="firestar"src="'+shatter+"'"/>;
    }
    
}
 console.log('ml5','ml5.version');
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/Vfmp_b86/model.json,'modelLoaded);