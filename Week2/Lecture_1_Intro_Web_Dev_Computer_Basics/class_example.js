

class office {
    constructor(total_desks,total_chairs) {
        this.total_chairs = total_chairs
        this.total_desks = total_desks
    }

    getTotalDesks() {
        return this.total_desks;
    }
}


class subOffice extends office {
    constructor(total_desks,total_chairs,varriabl3,varriabl4){

        super(total_desks,total_chairs);
        this.varriabl3 = varriabl3;
        this.varriabl4 = varriabl4;
    }
    getTotalDesks() {
        return this.total_desks - 1;
    }
}


let some_sub_office = new subOffice(4,3,2,1);
console.log(some_sub_office.getTotalDesks());
