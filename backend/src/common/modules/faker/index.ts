// import { faker } from '@faker-js/faker';
// import { ProjectStatus, Status } from '../../../../_protos/common';
// import { CreateProjectInput } from '../../../project/dto/create-project.input';
// import { City } from '../../../settings/entities/tag.entity';
// import { getRandomItem } from './utils/fake-data-gen';

// export const createRandomProject = (
//   cities: City[],
//   constructors: Constructors[],
// ) =>
//   function createProject(): CreateProjectInput {
//     return {
//       addressInfo: {
//         address: faker.location.direction(),
//         lat: faker.location.latitude(),
//         long: faker.location.longitude(),
//       },
//       adjunts: [],
//       amenitities: [],
//       buildingLicense: 'FAKER DATA',
//       description: faker.lorem.words(30),
//       status: Status.ACTIVE,
//       projectStatus: ProjectStatus.EN_OBRA,
//       name: faker.commerce.productName(),
//       videoUrl: '',
//       ionicaConnect: false,
//       images: [],
//       deliveryDate: faker.date.future(),
//       moreDetails: faker.lorem.words({ min: 30, max: 100 }),
//       cityId: getRandomItem(cities)._id,
//       constructorId: getRandomItem(constructors)._id,
//     };
//   };

// export const PROJECTS_FAKES = (
//   cities: City[],
//   constructors: Constructors[],
//   count: number,
// ): CreateProjectInput[] =>
//   faker.helpers.multiple(createRandomProject(cities, constructors), {
//     count,
//   });
