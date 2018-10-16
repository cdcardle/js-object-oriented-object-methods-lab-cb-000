function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = (x) => console.log("No, I must disagree")
}
