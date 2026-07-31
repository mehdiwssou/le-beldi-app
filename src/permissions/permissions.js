export const permissions = {

  owner: {

    users: true,
    employees: true,
    salaries: true,
    advances: true,
    absences: true,
    settings: true

  },


  manager: {

    users: false,
    employees: true,
    salaries: true,
    advances: true,
    absences: true,
    settings: false

  },


  employee: {

    users: false,
    employees: false,
    salaries: false,
    advances: false,
    absences: false,
    settings: false

  }

};



export function can(role, permission) {

  return permissions[role]?.[permission] || false;

}