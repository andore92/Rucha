INSERT INTO `rucha_db`.`MediaTypes` (`id`, `mediaChannel`, `createdAt`, `updatedAt`) VALUES ('1', 'TeleVision', now(), now());
INSERT INTO `rucha_db`.`MediaTypes` (`id`, `mediaChannel`, `createdAt`, `updatedAt`) VALUES ('2', 'Radio', now(), now());
INSERT INTO `rucha_db`.`MediaTypes` (`id`, `mediaChannel`, `createdAt`, `updatedAt`) VALUES ('3', 'print', now(), now());
INSERT INTO `rucha_db`.`MediaTypes` (`id`, `mediaChannel`, `createdAt`, `updatedAt`) VALUES ('4', 'Internet', now(), now());

commit;

INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('1', 'Food', now(), now(), '1');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('2', 'Sport', now(), now(), '1');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('3', 'movies', now(), now(), '1');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('4', 'talk', now(), now(), '2');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('5', 'news', now(), now(), '2');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('6', 'music', now(), now(), '2');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('7', 'Business', now(), now(), '3');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('8', 'Social', now(), now(), '3');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('9', 'Sports', now(), now(), '3');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('10', 'Video', now(), now(), '4');
INSERT INTO `rucha_db`.`mediacategories` (`id`, `CategoryType`, `createdAt`, `updatedAt`, `MediaTypeId`) VALUES ('11', 'other', now(), now(), '4');

commit;

INSERT INTO `rucha_db`.`mediaschedules` (`id`, `AirTime`, `duration`, `MediaUrl`, `createdAt`, `updatedAt`, `MediaCategoryId`) VALUES ('1', now(), '360', 'https://www.youtube.com/watch?v=voztwgixwtg', now(), now(), '1');
INSERT INTO `rucha_db`.`mediaschedules` (`id`, `AirTime`, `duration`, `MediaUrl`, `createdAt`, `updatedAt`, `MediaCategoryId`) VALUES ('2', now(), '360', 'https://www.youtube.com/watch?v=t4xJrSuxpbQ', now(), now(), '1');
INSERT INTO `rucha_db`.`mediaschedules` (`id`, `AirTime`, `duration`, `MediaUrl`, `createdAt`, `updatedAt`, `MediaCategoryId`) VALUES ('3', now(), '360', 'https://www.youtube.com/watch?v=UZCKgUwoAW0', now(), now(), '1');
INSERT INTO `rucha_db`.`mediaschedules` (`id`, `AirTime`, `duration`, `MediaUrl`, `createdAt`, `updatedAt`, `MediaCategoryId`) VALUES ('4', now(), '360', 'https://www.youtube.com/watch?v=PgRH3Akw-kI', now(), now(), '2');

commit;