// solved

const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

t = Number(t);

class AC {
    constructor(nlist) {
        this.nlist = nlist;
        this.length = nlist.length;
        this.reverseStatus = false;
    }

    getNlist() {
        if(this.reverseStatus) {
            for(let i = 0; i <= (this.length / 2) - 1; i++) {
                const temp = this.nlist[i];
                this.nlist[i] = this.nlist[this.length - 1 - i];
                this.nlist[this.length - 1 - i] = temp;
            }
        }

        return this.nlist;
    }

    reverse() {
        this.reverseStatus = !this.reverseStatus;
    }

    delete() {
        if(!this.length) return false;

        this.reverseStatus ? this.nlist.pop() : this.nlist.shift();
        this.length -= 1;
        return true;
    }
}

const result = [];

for(let i = 0; i < t * 3; i += 3) {
    const command = input[i];
    let nlist = JSON.parse(input[i + 2]);

    const ac = new AC(nlist);

    let end = false;

    for(let j = 0; j < command.length; j++) {
        if(command[j] === 'R') ac.reverse();
        else {
            if(!ac.delete()) {
                result.push('error');
                end = true;
                break;
            }
        }
    }

    if(!end) result.push(JSON.stringify(ac.getNlist()));
}

console.log(result.join('\n'));