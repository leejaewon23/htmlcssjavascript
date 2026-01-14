class NintendoGame {
    // 1. 초기 데이터 관리 (Private 필드)
    #gameList = [
      {id: 1, name: "마리오 골프", genre: "S", grade: "ALL", price: 20000, imgUrl: "https://pimg.mk.co.kr/news/cms/202504/06/news-p.v1.20250404.ad221f845db2489a86c2ff50f32c53fa_P1.png"},
      {id: 2, name: "젤다의전설", genre: "R", grade: "ALL", price: 20000, imgUrl: "https://pimg.mk.co.kr/news/cms/202504/06/news-p.v1.20250404.ad221f845db2489a86c2ff50f32c53fa_P1.png"},
    ];
  
    // 2. 화면에 목록 출력
    printList() {
      const $listBlock = $(".listDataBlock");
      $listBlock.empty(); // 중복 출력 방지를 위해 기존 목록을 비움
  
      this.#gameList.forEach((item) => {
        $listBlock.append(this.printRow(item));
      });
    }
  
    printGenre(genre) {
      switch (genre) {
        case "A": return "액션";
        case "S": return "스포츠";
        case "R": return "RPG";
        default: return "-";
      }
    }
  
    printGrade(grade) {
      switch (grade) {
        case "ALL": return "전체이용";
        case "18": return "18세이상";
        case "13": return "13세이상";
        default: return "-";
      }
    }
  
    // 한 행의 HTML 생성 (클릭 시 수정을 위해 data-id 속성 추가)
    printRow(item) {
      return `
        <div class="listDataRow" style="cursor:pointer;" onclick="nint.printOneGame(${item.id})">
          <div class="listItem">
            <div class="itemData text-wrapper">${this.printGenre(item.genre)}</div>
          </div>
          <div class="listItem">
            <div class="itemData text-wrapper">${this.printGrade(item.grade)}</div>
          </div>
          <div class="listItem">
            <div class="itemData text-wrapper">${item.name}</div>
          </div>
        </div>`;
    }
  
    // 입력창 초기화
    clearInputBox() {
      $("#name, #price, #imgUrl").val("");
      $("#genre").val("A");
      $("#grade").val("ALL");
      $(".showImage").attr("src", ""); // 이미지 미리보기 초기화
    }
  
    // 선택한 게임 데이터를 입력창에 세팅
    setData2InputBox(game) {
      $("#name").val(game.name);
      $("#genre").val(game.genre);
      $("#grade").val(game.grade);
      $("#price").val(game.price);
      $("#imgUrl").val(game.imgUrl);
      $(".showImage").attr("src", game.imgUrl);
      // 수정을 위해 현재 선택된 ID를 임시 저장 (숨겨진 input이 없다면 변수 처리 가능)
      this.currentSelectedId = game.id;
    }
  
    // 데이터 검증
    checkInputData() {
      if (!$("#name").val() || !$("#price").val()) {
        alert("게임 제목과 가격을 입력해주세요.");
        return false;
      }
      return true;
    }
  
    // 게임 추가
    addGame() {
      if (this.checkInputData()) return;
  
      const newGame = {
        id: Date.now(), // 고유번호 생성
        name: $("#name").val(),
        genre: $("#genre").val(),
        grade: $("#grade").val(),
        price: Number($("#price").val()),
        imgUrl: $("#imgUrl").val()
      };
  
      this.#gameList.push(newGame);
      this.printList();
      this.clearInputBox();
      alert("새 게임이 추가되었습니다.");
    }
  
    // 게임 수정
    updateGame() {
      if (this.currentSelectedId) {
        alert("수정할 게임을 목록에서 먼저 선택해주세요.");
        return;
      }
      if (!this.checkInputData()) return;
  
      const index = this.#gameList.findIndex(g => g.id === this.currentSelectedId);
      if (index !== -1) {
        this.#gameList[index] = {
          id: this.currentSelectedId,
          name: $("#name").val(),
          genre: $("#genre").val(),
          grade: $("#grade").val(),
          price: Number($("#price").val()),
          imgUrl: $("#imgUrl").val()
        };
        this.printList();
        this.clearInputBox();
        this.currentSelectedId = null;
        alert("정보가 수정되었습니다.");
      }
    }
  
    // 게임 삭제
    deleteGame() {
      if (this.currentSelectedId) {
        alert("삭제할 게임을 목록에서 먼저 선택해주세요.");
        return;
      }
      
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.#gameList = this.#gameList.filter(g => g.id !== this.currentSelectedId);
        this.printList();
        this.clearInputBox();
        this.currentSelectedId = null;
      }
    }
  
    // 목록에서 클릭 시 해당 정보를 입력창에 표시
    printOneGame(id) {
      const found = this.#gameList.find(g => g.id === id);
      if (found) {
        this.setData2InputBox(found);
      }
    }
  }
  
  // 전역에서 접근 가능하도록 nint 변수를 바깥으로 뺌
  let nint;
  
  $(() => {
    nint = new NintendoGame();
    nint.printList();
  
    // 버튼 이벤트 연결
    $("#btnAdd").on("click", () => nint.addGame());
    $("#btnUpt").on("click", () => nint.updateGame());
    $("#btnDel").on("click", () => nint.deleteGame());
    
    // 이미지 주소 입력 시 미리보기 변경
    $("#imgUrl").on("change", function() {
      $(".showImage").attr("src", $(this).val());
    });
  });