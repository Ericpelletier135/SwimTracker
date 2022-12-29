import Group from './Group.mjs';

class Organization {
    constructor(name) {
        this.name = name;
        this.groups = [];
    }

    setName(name) {
        this.name = name;
    }

    addGroup(group) {
        this.groups.push(group);
    }

    removeGroup(groupId) {
        const index = this.groups.findIndex(g => g.id == groupId);
        this.groups.splice(index, 1);
    }

}

export default Organization;
