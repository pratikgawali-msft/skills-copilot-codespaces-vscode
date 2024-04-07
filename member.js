function skillsMember() {
    var member = new Member();
    member.skills = [
        new Skill('JavaScript', 5),
        new Skill('Java', 4),
        new Skill('Python', 3)
    ];
    return member;
}