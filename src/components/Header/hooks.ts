const GENDER = {
  MAN: "man",
  WOMAN: "woman",
};

export const userGender = (gender: string) => {
  return gender === GENDER.MAN ? "icon-man" : "icon-woman";
};
