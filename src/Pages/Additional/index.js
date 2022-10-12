import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./index.css";

function Additional() {
  const navigate = useNavigate();

  /**
   * 회원유형, 고등학교, 고등학교 리스트 렌더링 여부, 지역, 지역 리스트 렌더링 여부, 생일, 알람메세지, 성별 State 입니다.
   */
  const [selectedPosition, setSelectedPosition] = useState(-1);
  const [selectedHighSchool, setSelectedHighSchool] = useState({
    id: 0,
    name: "",
  });
  const [isShowhighSchool, setIsShowhighSchool] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState("지역을 선택해주세요");
  const [isShowLocation, setIsShowLocation] = useState(false);
  const [userBirth, setUserBirth] = useState("");
  const [helpAlert, setHelpAlert] = useState({
    position: "",
    highSchool: "",
    birth: "",
  });
  const [userBirthLast, setUserBirthLast] = useState("");

  /**
   * 고등학교 검색 관련 Input의 Value를 입력하는 함수입니다.
   * onchange이벤트를 통해서 selectedHighSchool State에 저장됩니다.
   */
  const handleSearchHighSchool = (event) => {
    const { value } = event.currentTarget;
    setSelectedHighSchool({ id: 0, name: value });
  };

  /**
   * 유저 생일 입력 Input의 Value를 입력하는 함수입니다.
   * onchange이벤트를 통해서 userBirth State에 저장됩니다.
   */
  const handleUserBirth = (event) => {
    const { value } = event.currentTarget;
    setUserBirth(value);
  };

  /**
   * 유저의 성별 Input의 Value를 입력하는 함수입니다.
   * onchange이벤트를 통해서 userBirthLast State에 저장됩니다.
   * 주민등록번호 7번째 자릿수로 판별합니다.
   */
  const handleUserBirthLast = (e) => {
    const { value } = e.currentTarget;
    setUserBirthLast(value);
  };

  /**
   * 추가정보입력 완료 버튼에서 실행되는 함수입니다.
   * 각 입력란, 체크항목을 모두 유효성 검사하여 통과하면 추가정보기입 API를 호출합니다.
   * 통과하지 못한 경우에는 알림 메세지를 출력합니다.
   */
  const validation = (event) => {
    event.preventDefault();

    if (
      selectedPosition === -1 &&
      selectedHighSchool.id === 0 &&
      userBirth.length !== 6 &&
      Number(userBirthLast) > 4 &&
      Number(userBirthLast) < 1
    ) {
      setHelpAlert({
        birth: "생년월일을 정확하게 입력해주세요.",
        highSchool: "고등학교를 선택해주세요.",
        position: "회원 유형을 선택해주세요.",
      });
      return;
    } else if (
      selectedHighSchool.id === 0 &&
      userBirth.length !== 6 &&
      Number(userBirthLast) > 4 &&
      Number(userBirthLast) < 1
    ) {
      setHelpAlert({
        position: "",
        birth: "생년월일을 정확하게 입력해주세요.",
        highSchool: "고등학교를 선택해주세요.",
      });
      return;
    } else if (
      selectedPosition === -1 &&
      userBirth.length !== 6 &&
      Number(userBirthLast) > 4 &&
      Number(userBirthLast) < 1
    ) {
      setHelpAlert({
        position: "회원 유형을 선택해주세요.",
        highSchool: "",
        birth: "생년월일을 정확하게 입력해주세요.",
      });
      return;
    } else if (selectedPosition === -1 && selectedHighSchool.id === 0) {
      setHelpAlert({
        position: "회원 유형을 선택해주세요.",
        highSchool: "고등학교를 선택해주세요.",
        birth: "",
      });
      return;
    } else if (selectedPosition === -1) {
      setHelpAlert({
        position: "회원 유형을 선택해주세요.",
        highSchool: "",
        birth: "",
      });
      return;
    } else if (selectedHighSchool.id === 0) {
      setHelpAlert({
        position: "",
        highSchool: "고등학교를 선택해주세요.",
        birth: "",
      });
      return;
    } else if (
      userBirth.length !== 6 &&
      Number(userBirthLast) > 4 &&
      Number(userBirthLast) < 1
    ) {
      setHelpAlert({
        position: "",
        highSchool: "",
        birth: "생년월일을 정확하게 입력해주세요.",
      });
      return;
    }

    completeSignUp();
  };

  const completeSignUp = () => {
    const data = {
      status:
        selectedPosition === 1
          ? "학생"
          : selectedPosition === 2
          ? "학부모"
          : "선생님",
      highschool: {
        name: selectedHighSchool.name,
        location: selectedLocation,
      },
      birthday:
        userBirth.slice(0, 2) +
        "/" +
        userBirth.slice(2, 4) +
        "/" +
        userBirth.slice(5) +
        "/" +
        userBirthLast,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    };

    fetch("http://10.36.180.196:8000/selT/users", requestOptions)
      .then((response) => response.json())
      .then((res) => localStorage.setItem("user_name", res));
    navigate("/");
  };

  return (
    <div className="additonal">
      <form className="additonalInner" onSubmit={validation}>
        <div className="additonalInnerAlign">
          <div className="additonalInnerTitle">추가정보입력</div>
          <div className="selectedPositionTitle">회원유형</div>
          <div className="selectPositionWrap">
            <div className="selectPosition">
              <p className="selectPositionSpan">학생</p>
              <div
                className="selectedArea"
                onClick={() => {
                  setSelectedPosition(1);
                  setHelpAlert({ ...helpAlert, position: "" });
                }}
              >
                <div
                  className="selected"
                  style={{
                    backgroundColor: `${
                      selectedPosition === 1 ? "#2ac7a2" : "white"
                    }`,
                  }}
                ></div>
              </div>
            </div>
            <div className="selectPosition">
              <p className="selectPositionSpan">학부모</p>
              <div
                className="selectedArea"
                onClick={() => {
                  setSelectedPosition(2);
                  setHelpAlert({ ...helpAlert, position: "" });
                }}
              >
                <div
                  className="selected"
                  style={{
                    backgroundColor: `${
                      selectedPosition === 2 ? "#2ac7a2" : "white"
                    }`,
                  }}
                ></div>
              </div>
            </div>
            <div className="selectPosition">
              <p className="selectPositionSpan">선생님</p>
              <div
                className="selectedArea"
                onClick={() => {
                  setSelectedPosition(3);
                  setHelpAlert({ ...helpAlert, position: "" });
                }}
              >
                <div
                  className="selected"
                  style={{
                    backgroundColor: `${
                      selectedPosition === 3 ? "#2ac7a2" : "white"
                    }`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="helpMessege">{helpAlert.position}</div>
          <div className="selectedHighSchoolTitle">고등학교</div>
          <div className="selectedHighSchoolWrap">
            <div className="highSchoolSelect">
              <input
                className="highSchoolText"
                value={selectedHighSchool.name}
                placeholder="고등학교를 선택해주세요"
                onChange={(e) => {
                  handleSearchHighSchool(e);
                  setIsShowhighSchool(true);
                }}
              />
              <button
                className="showHighSchoolButton"
                onClick={(e) => {
                  e.preventDefault();
                  setIsShowhighSchool((prev) => !prev);
                }}
                style={{
                  transform: `rotate(${isShowhighSchool ? -90 : 90}deg)`,
                  top: `${isShowhighSchool ? "25" : "50"}%`,
                }}
              ></button>
            </div>
            {isShowhighSchool && (
              <ul className="highSchoolOption">
                {ListData.filter((data) =>
                  data.name.includes(selectedHighSchool.name)
                ).length < 1 && (
                  <li className="highSchoolOptionList">
                    {"검색된 결과가 없습니다."}
                  </li>
                )}
                {ListData.filter((data) =>
                  data.name.includes(selectedHighSchool.name)
                ).map(({ id, name, location }) => (
                  <li
                    key={id}
                    className="highSchoolOptionList"
                    onClick={() => {
                      setSelectedHighSchool({ id: id, name: name });
                      setSelectedLocation(location[0]);
                      setIsShowhighSchool((prev) => !prev);
                      setHelpAlert({ ...helpAlert, highSchool: "" });
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
            <div className="helpMessege">{helpAlert.highSchool}</div>
          </div>
          <div className="selectedLocationTitle">지역</div>
          <div className="selectedLocationWrap">
            <button
              className="locationToggleButton"
              style={{
                color: `${selectedHighSchool.id < 1 ? "#aaaaaa" : "black"}`,
              }}
              onClick={(e) => {
                setIsShowLocation(true);
                e.preventDefault();
              }}
              disabled={selectedHighSchool.id < 1}
            >
              {selectedLocation}
            </button>
            {isShowLocation && (
              <ul className="locationOption">
                {ListData[selectedHighSchool.id - 1].location.map(
                  (location, index) => {
                    return (
                      <li
                        key={index}
                        className="locationOptionList"
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsShowLocation(false);
                        }}
                      >
                        {location}
                      </li>
                    );
                  }
                )}
              </ul>
            )}
          </div>
          <div className="selectedUserBirthTitle">생년월일</div>
          <div className="userBirthWrap">
            <span className="userBirthTitle">주민등록번호 앞 7자리</span>
            <div className="userBirthInputWrap">
              <input
                className="userBirthInput"
                placeholder="생년월일"
                value={userBirth}
                onChange={handleUserBirth}
                onKeyUp={() =>
                  setHelpAlert({
                    ...helpAlert,
                    birth: `${
                      userBirth.length !== 6 ||
                      Number(userBirthLast) < 1 ||
                      Number(userBirthLast) > 4
                        ? "생년월일을 정확하게 입력해주세요."
                        : ""
                    }`,
                  })
                }
                maxLength="6"
              />
              <span className="userBirthPartition">-</span>
              <input
                className="userBirthLastInput"
                placeholder="0"
                value={userBirthLast}
                onChange={handleUserBirthLast}
                onKeyUp={() =>
                  setHelpAlert({
                    ...helpAlert,
                    birth: `${
                      userBirth.length !== 6 ||
                      Number(userBirthLast) < 1 ||
                      Number(userBirthLast) > 4
                        ? "생년월일을 정확하게 입력해주세요."
                        : ""
                    }`,
                  })
                }
                maxLength="1"
              />
              <div className="userBirthLastPrivate">******</div>
            </div>
          </div>
          <div className="helpMessege">{helpAlert.birth}</div>
        </div>
        <button className="signupSubmit" type="submit">
          회원가입 완료
        </button>
      </form>
    </div>
  );
}

export default Additional;

const ListData = [
  {
    id: 1,
    name: "보성고",
    location: ["서울"],
  },
  {
    id: 2,
    name: "나나고",
    location: ["부산"],
  },
  {
    id: 3,
    name: "다다고",
    location: ["서울", "경기"],
  },
  {
    id: 4,
    name: "라라고",
    location: ["서울", "경기"],
  },
  {
    id: 5,
    name: "마마고",
    location: ["제주"],
  },
];
