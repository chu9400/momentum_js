let time = 1900;

if (time < 1000 ) {
    alert("퀴즈는 10시부터 입장 가능합니다.");
} else if (time >= 1300) {
    if(time < 1500) {
        alert("퀴즈는 15시부터 입장 가능합니다.");
    } else if (time >= 1515) {
        if (time < 1800) {
            alert("1차 퀴즈는 종료 되었습니다.");
        }  else if (time >= 1900) {
            alert("퀴즈는 19시에 종료 되었습니다.");
        }
    }
}

