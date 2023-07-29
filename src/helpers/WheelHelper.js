

export function spinWheel(object, shouldSpin){

    if(typeof object !== 'undefined' && shouldSpin) {
        object.rotation.z += 7;
    }
}