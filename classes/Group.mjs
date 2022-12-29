import Swimmer from './Swimmer.mjs';
import TrainingGroup from './TrainingGroup.mjs';

class Group {
    constructor(name) {
        this.name = name;
        this.swimmers = [];
        this.trainingGroups = [];
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

        // remove swimmer from each training group as well
        this.trainingGroups.forEach(trainingGroup => {
            const index = trainingGroup.swimmers.findIndex(s => s.id == swimmerId);
            trainingGroup.swimmers.splice(index, 1);
        })

    }

    addTrainingGroup(trainingGroup) {
        this.trainingGroups.push(trainingGroup);
    }

    removeTrainingGroup(trainingGroupId) {
        const index = this.trainingGroups.findIndex(tg => tg.id === trainingGroupId);
        this.trainingGroups.splice(index, 1);
    }

}

export default Group;