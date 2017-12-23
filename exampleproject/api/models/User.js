/**
 * User.js
 *
 * @description :: This model represents an user of the ADePaMa app.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
    //connection: 'mongo',
    //tableName: 'User',
    attributes: {
        userId: {
            type: 'String',
            required: true,
            unique: true
        },
        firstName: {
            type: 'String',
            required: true
        },
        lastName: {
            type: 'String',
            required: true
        },
        email: {
            type: 'String',
            required: true
        },
        password: {
            type: 'String',
            required: true
        },
        birthday: {
            type: 'Date',
            required: true
        },
        city: {
            type: 'String',
            required: true
        },
        houseNumber: {
            type: 'String',
            required: true
        },
        street: {
            type: 'String',
            required: true
        },
        zipCode: {
            type: 'String',
            required: true
        },
        additionalInformation: {
            type: 'String'
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            delete obj.id;
            delete obj.createdAt;
            delete obj.updatedAt;
            return obj;
        }
    }
};