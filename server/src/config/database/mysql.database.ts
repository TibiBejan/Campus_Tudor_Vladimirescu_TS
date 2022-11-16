import { Hall, HallJoinTax, HallOccupancy, HallRoom, HallRoomOccupancy, HallRoomType, HallStaff, HallTax, Role, RoleSecurable, Securable, Session, StudentAllocation, University, UniversityHall, UniversityHoliday, UniversityOccupancy, UniversityUser, UniversityWithHoliday, User, UserEnrollment, UserEnrollmentTracking, UserProfile, UserRelative, UserRole, UserRoleTracking } from '@api/v1/models';
import environmentConstants from '@config/constants';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: "mysql",
    host: environmentConstants.mysqlHost,
    port: environmentConstants.mysqlPort,
    username: environmentConstants.mysqlUser,
    password: environmentConstants.mysqlPassword,
    database: environmentConstants.mysqlDatabase,
    synchronize: true,
    logging: true,
    entities: [
        User,
        UserRole,
        UserProfile,
        UserEnrollment,
        UserEnrollmentTracking,
        UserRelative,
        Role,
        UserRoleTracking,
        RoleSecurable,
        Securable,
        Session,
        University,
        UniversityHall,
        UniversityUser,
        UniversityWithHoliday,
        UniversityHoliday,
        UniversityOccupancy,
        Hall,
        HallJoinTax,
        HallTax,
        HallStaff,
        HallOccupancy,
        HallRoom,
        HallRoomType,
        HallRoomOccupancy,
        StudentAllocation,
    ],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;