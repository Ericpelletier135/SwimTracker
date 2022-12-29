import Swimmer from './Swimmer.mjs';
import Practice from './Practice.mjs';


class TrainingGroup {
    constructor(name) {
        this.name = name;
        this.swimmers = [];
        this.practices = [];
    }

    setName(name) {
        this.name = name;
    }

    addSwimmer(swimmer) {
        this.swimmers.push(swimmer);
    }

    removeSwimmer(swimmerId) {
        const index = this.swimmers.findIndex(s => s.id === swimmerId);
        this.swimmers.splice(index, 1);
    }

    addPractice(practice) {
        this.practices.push(practice);
    }

    removePractice(practiceId) {
        const index = this.practices.findIndex(p => p.id === practiceId);
        this.practices.splice(index, 1);
    }

}

export default TrainingGroup;