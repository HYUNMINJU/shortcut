// 키 색 초기화
function resetKeyColors() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.style.backgroundColor = '';
    });
  }
  
  // 키를 순서대로 강조하는 함수
  function highlightKeysInOrder(keySteps, delay = 200) {
    resetKeyColors();
    keySteps.forEach((step, index) => {
      setTimeout(() => {
        const keyElement = document.getElementById(step.id);
        if (keyElement) {
          keyElement.style.backgroundColor = step.color;
        }
      }, index * delay);
    });
  }
  
  // 단축키 버튼 이벤트 설정
  document.getElementById("spaceBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "space", color: "#e3632d" },
    ]);
  });

  document.getElementById("enterBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "enter", color: "#e3632d" },
    ]);
  });

  document.getElementById("backspaceBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "backspace", color: "#e3632d" },
    ]);
  });

  document.getElementById("ctrlBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#e3632d" },
    ]);
  });

  document.getElementById("altBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "alt", color: "#e3632d" },
    ]);
  });

  document.getElementById("shiftBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "sh-key", color: "#e3632d" },
    ]);
  });

  document.getElementById("winBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#e3632d" },
    ]);
  });

  document.getElementById("copyBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#F7AA97" },
      { id: "c-key", color: "#F7AA97" }
    ]);
  });
  
  document.getElementById("pasteBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#F16B6F" },
      { id: "v-key", color: "#F16B6F" }
    ]);
  });
  
  document.getElementById("exsectBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#67D5B5" },
      { id: "x-key", color: "#67D5B5" }
    ]);
  });
  
  document.getElementById("returnBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#8EC0E4" },
      { id: "z-key", color: "#8EC0E4" }
    ]);
  });
  
  document.getElementById("reexecuteBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#AAABD3" },
      { id: "y-key", color: "#AAABD3" }
    ]);
  });
  
  document.getElementById("selectBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#f349eb" },
      { id: "a-key", color: "#f349eb" }
    ]);
  });
  
  document.getElementById("findBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#2b90d9" },
      { id: "f-key", color: "#2b90d9" }
    ]);
  });
  
  document.getElementById("saveBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "ctrl", color: "#cbe86b" },
      { id: "s-key", color: "#cbe86b" }
    ]);
  });
  
  document.getElementById("filefindBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#79bd9a" },
      { id: "e-key", color: "#79bd9a" }
    ]);
  });
  
  document.getElementById("emogiBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#0080ff" },
      { id: ".-key", color: "#0080ff" }
    ]);
  });
  
  document.getElementById("lockBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#A593E0" },
      { id: "l-key", color: "#A593E0" }
    ]);
  });
  
  document.getElementById("prtscrBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#F68657" },
      { id: "pr-key", color: "#F68657" }
    ]);
  });
  
  document.getElementById("changeBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "alt", color: "#9055A2" },
      { id: "tap-key", color: "#9055A2" }
    ]);
  });
  
  document.getElementById("areacapBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#67D5B5" },
      { id: "sh-key", color: "#67D5B5" },
      { id: "s-key", color: "#67D5B5" }
    ]);
  });
  
  document.getElementById("wallpaperBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "win", color: "#FFBC42" },
      { id: "d-key", color: "#FFBC42" }
    ]);
  });
  
  document.getElementById("numlockBtn").addEventListener("click", function () {
    highlightKeysInOrder([
      { id: "nl-key", color: "#DE7E73" }
    ]);
  });
  
