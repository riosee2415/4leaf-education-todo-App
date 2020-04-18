function startRandom() {
  console.log("start random");

  const randomValue = Math.random() * 3 + 1;
  const exeValue = Math.floor(randomValue);

  const backgroundFileName = exeValue + ".jpg";
  console.log(backgroundFileName);

  const bodyTag = document.getElementById("myBody");
  console.dir(bodyTag);

  bodyTag.style.backgroundImage = "url('" + backgroundFileName + "')";
  bodyTag.style.backgroundSize = "cover";
}

function init() {
  console.log("Init Start");
  startRandom();
}

init();

/**
 * 표기법 : camel 표기법 || case 표기법 || 낙타 표기법
 * 소문자로 시작하고, 띄어쓰기를 해야 하는 경우 띄어쓰기를 하지 않고 다음 글자를 대문자로 표기한다.
 * 단, Class를 생성할 경우는 대문자로 시작한다.
 * 숫자로 시작할 수 없고, 특수문자는 _(언더바)만 가능하다.
 *
 * get background name => getBackgroundName
 * modified board data => modifiedBoardData
 *
 */
