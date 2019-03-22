'use strict';

const faker = require('faker')
const sampleDataCount = 15
const userData = []

for (let i = 0; i < sampleDataCount; i++) {
    userData.push({
        name: faker.name.findName(),
        job: faker.name.jobTitle(),
        department: faker.commerce.department(),
        phone: faker.phone.phoneNumber(),
        description: 'They are ' + faker.hacker.adjective() + '.'
    })
}
module.exports = {
    context: {
        users: userData
    }
}