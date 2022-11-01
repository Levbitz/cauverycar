import React from "react";
import { IoBusiness, IoPersonSharp } from "react-icons/io5";
import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import { GiHouse } from "react-icons/gi";
import { RiMovieFill } from "react-icons/ri";
import { FaGlobe, FaHeartbeat } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export const SidebarData = [
  {
    title: "Maruti Suzuki",
    categoryUrl: "/maruti_suzuki",
    icon: <IoBusiness />,

    subNav: [
      {
        title: "Omni",
        path: `/category${"/maruti_suzuki/omni"}`,

        cName: "sub-nav",
      },
      {
        title: "Ignis",
        path: `/category${"/maruti_suzuki/ignis"}`,

        cName: "sub-nav",
      },
      {
        title: "Eeco",
        path: `/category${"/maruti_suzuki/eeco"}`,

        cName: "sub-nav",
      },
      {
        title: "Dzire",
        path: `/category${"/maruti_suzuki/dzire"}`,

        cName: "sub-nav",
      },
      {
        title: "Ciaz",
        path: `/category${"/maruti_suzuki/ciaz"}`,

        cName: "sub-nav",
      },
      {
        title: "Alto K10",
        path: `/category${"/maruti_suzuki/alto_k10"}`,

        cName: "sub-nav",
      },
      {
        title: "Alto",
        path: `/category${"/maruti_suzuki/alto"}`,

        cName: "sub-nav",
      },
      {
        title: "Eeco",
        path: `/category${"/maruti_suzuki/eeco"}`,
      },
      {
        title: "Ertiga",
        path: `/category${"/maruti_suzuki/ertiga"}`,
      },
      {
        title: "Ritz",
        path: `/category${"/maruti_suzuki/ritz"}`,
      },
      {
        title: "Swift",
        path: `/category${"/maruti_suzuki/swift"}`,
      },
      {
        title: "Vitara",
        path: `/category${"/maruti_suzuki/vitara"}`,
      },
      {
        title: "WagonR",
        path: `/category${"/maruti_suzuki/wagonr"}`,
      },
      {
        title: "Other Maruti Suzuki",
        path: `/category${"/maruti_suzuki/other_maruti_suzuki"}`,
      },
    ],
  },
  {
    title: "Hyundai",
    categoryUrl: "hyundai",

    icon: <IoPersonSharp />,

    subNav: [
      {
        title: "Eon",
        path: `/category${"/hyundai/eon"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Elantra",
        path: `/category${"/hyundai/elantra"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Grand i10",
        path: `/category${"/hyundai/grand_i10"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "i20",
        path: `/category${"/hyundai/i20"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Santro xing",
        path: `/category${"/hyundai/santro_xing"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Verna",
        path: `/category${"/hyundai/verna"}`,
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Creta",
        path: `/category${"/hyundai/creta"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Elite i20",
        path: `/category${"/hyundai/elite_i20"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "i20 Active",
        path: `/category${"/hyundai/i20_active"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Venue",
        path: `/category${"/hyundai/venue"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Xcent",
        path: `/category${"/hyundai/xcent"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "other Hyundai",
        path: `/category${"/hyundai/other_hyundai"}`,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Honda",
    categoryUrl: "honda",
    // path: "/reports",
    icon: <GiHouse />,

    subNav: [
      {
        title: "Civic",
        path: `/category${"/honda/civic"}`,
        subCategoryUrl: "civic",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "CR-V",
        subCategoryUrl: "cr-v",
        path: `/category${"/honda/cr-v"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "HR-V",
        subCategoryUrl: "hrv",
        path: `/category${"/honda/hr-v"}`,
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "W-RV",
        subCategoryUrl: "w-rv",
        path: `/category${"/honda/w-rv"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "City",
        subCategoryUrl: "city",
        path: `/category${"/honda/city"}`,
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Accord",
        subCategoryUrl: "accord",
        path: `/category${"/honda/accord"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Amaze",
        subCategoryUrl: "amaze",
        path: `/category${"/honda/amaze"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Jazz",
        subCategoryUrl: "jazz",
        path: `/category${"/honda/jazz"}`,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "other Honda",
        subCategoryUrl: "other_honda",
        path: `/category${"/honda/other_honda"}`,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Toyota",
    categoryUrl: "toyota",
    // path: "/reports",
    icon: <RiMovieFill />,

    subNav: [
      {
        title: "Etios",
        subCategoryUrl: "etios",
        path: `/category${"/toyota/etios"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Glanza",
        subCategoryUrl: "glanza",
        path: `/category${"/toyota/glanza"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Yaris",
        subCategoryUrl: "yaris",
        path: `/category${"/toyota/yaris"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Innova Crysta",
        subCategoryUrl: "innova_crysta",
        path: `/category${"/toyota/innova_crysta"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Etios Liva",
        subCategoryUrl: "etios_liva",
        path: `/category${"/toyota/etios_liva"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Etios Cross",
        subCategoryUrl: "etios_cross",
        path: `/category${"/toyota/etios_cross"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Corolla Altis",
        subCategoryUrl: "corolla_altis",
        path: `/category${"/toyota/corolla_altis"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Fortuner",
        subCategoryUrl: "fortuner",
        path: `/category${"/toyota/fortuner"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Camry",
        subCategoryUrl: "camry",
        path: `/category${"/toyota/camry"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Innova",
        subCategoryUrl: "innova",
        path: `/category${"/toyota/innova"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Toyota",
        path: `/category${"/toyota/other_toyota"}`,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Tata",
    categoryUrl: "tata",
    // path: "/reports",
    icon: <FaGlobe />,

    subNav: [
      {
        title: "Zest",
        subCategoryUrl: "zest",
        path: `/category${"/tata/zest"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Tigor",
        subCategoryUrl: "tigor",
        path: `/category${"/tata/tigor"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Tiago",
        subCategoryUrl: "tiago",
        path: `/category${"/tata/tiago"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Safari Storme",
        subCategoryUrl: "safari_storme",
        path: `/category${"/tata/safari_storme"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Nexon",
        subCategoryUrl: "nexon",
        path: `/category${"/tata/nexon"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Hexa",
        subCategoryUrl: "hexa",
        path: `/category${"/tata/hexa"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Harrier",
        subCategoryUrl: "harrier",
        path: `/category${"/tata/harrier"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Bolt",
        subCategoryUrl: "bolt",
        path: `/category${"/tata/bolt"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Indica",
        subCategoryUrl: "indica",
        path: `/category${"/tata/indica"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Nano",
        subCategoryUrl: "nano",
        path: `/category${"/tata/nano"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Tata",
        subCategoryUrl: "other_tata",
        path: `/category${"/tata/other_tata"}`,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Mahindra",
    categoryUrl: "mahindra",
    // path: "/reports",
    icon: <ImProfile />,

    subNav: [
      {
        title: "Thar",
        subCategoryUrl: "thar",
        path: `/category${"/mahindra/thar"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "TUV 300",
        subCategoryUrl: "tuv_300",
        path: `/category${"/mahindra/tuv_300"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "KUV 100",
        subCategoryUrl: "kuv_100",
        path: `/category${"/mahindra/kuv_100"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Bolero",
        subCategoryUrl: "bolero",
        path: `/category${"/mahindra/bolero"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "XUV500",
        subCategoryUrl: "xuv500",
        path: `/category${"/mahindra/xuv500"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Xylo",
        subCategoryUrl: "xylo",
        path: `/category${"/mahindra/xylo"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Mahindra",
        subCategoryUrl: "other_mahindra",
        path: `/category${"/mahindra/other_mahindra"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Volkswagen",
    categoryUrl: "volkswagen",
    // path: "/reports",
    icon: <FaHeartbeat />,

    subNav: [
      {
        title: "Polo",
        subCategoryUrl: "polo",
        path: `/category${"/volkswagen/polo"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Veno",
        subCategoryUrl: "veno",
        path: `/category${"/volkswagen/veno"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Tiguan",
        subCategoryUrl: "tiguan",
        path: `/category${"/volkswagen/tiguan"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "T-Roc",
        subCategoryUrl: "t-roc",
        path: `/category${"/volkswagen/t-roc"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Ameo",
        subCategoryUrl: "ameo",
        path: `/category${"/volkswagen/ameo"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Golf",
        subCategoryUrl: "golf",
        path: `/category${"/volkswagen/golf"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Volkswagen",
        subCategoryUrl: "other_volkswagen",
        path: `/category${"/volkswagen/other_volkswagen"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Kia",
    categoryUrl: "kia",
    // path: "/reports",
    icon: <FaHeartbeat />,

    subNav: [
      {
        title: "Ceed",
        subCategoryUrl: "ceed",
        path: `/category${"/kia/ceed"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Sonet",
        subCategoryUrl: "sonet",
        path: `/category${"/kia/sonet"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Seltos",
        subCategoryUrl: "seltos",
        path: `/category${"/kia/seltos"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Carnival",
        subCategoryUrl: "carnival",
        path: `/category${"/kia/carnival"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Cerato",
        subCategoryUrl: "cerato",
        path: `/category${"/kia/cerato"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Cerato Sport",
        subCategoryUrl: "cerato_sport",
        path: `/category${"/kia/cerato_sport"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Kia",
        subCategoryUrl: "other_kia",
        path: `/category${"/kia/other_kia"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Mercedes Benz",
    categoryUrl: "mercedes_benz",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "C Class",
        subCategoryUrl: "c_class",
        path: `/category${"/mercedes_benz/c_class"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "E Class",
        subCategoryUrl: "e_class",
        path: `/category${"/mercedes_benz/e_class"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "G Class",
        subCategoryUrl: "g_class",
        path: `/category${"/mercedes_benz/g_class"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Mercedes Benz",
        subCategoryUrl: "other_mercedes_benz",
        path: `/category${"/mercedes_benz/other_mercedes_benz"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Citroen",
    categoryUrl: "citroen",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "C3",
        subCategoryUrl: "c3",
        path: `/category${"/citroen/c3"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "C4",
        subCategoryUrl: "c4",
        path: `/category${"/citroen/c4"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "C5",
        subCategoryUrl: "c5",
        path: `/category${"/citroen/c5"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Citroen",
        subCategoryUrl: "other_citroen",
        path: `/category${"/citroen/other_citroen"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "BMW",
    categoryUrl: "bmw",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "7 Series",
        subCategoryUrl: "7_series",
        path: `/category${"/bmw/7_series"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "5 Series",
        subCategoryUrl: "5_series",
        path: `/category${"/bmw/5_series"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "3 Series GT",
        subCategoryUrl: "3_series_gt",
        path: `/category${"/bmw/3_series_gt"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "3 Series",
        subCategoryUrl: "3_series",
        path: `/category${"/bmw/3_series"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "X1",
        subCategoryUrl: "x1",
        path: `/category${"/bmw/x1"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "X3",

        subCategoryUrl: "x3",

        path: `/category${"/bmw/x3"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "X4",

        subCategoryUrl: "x4",

        path: `/category${"/bmw/x4"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "X5",

        subCategoryUrl: "x5",

        path: `/category${"/bmw/x5"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "X6",

        subCategoryUrl: "x6",

        path: `/category${"/bmw/x6"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other BMW",
        subCategoryUrl: "other_bmw",
        path: `/category${"/bmw/other_bmw"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Skoda",
    categoryUrl: "skoda",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "Octavia",
        subCategoryUrl: "octavia",
        path: `/category${"/skoda/octavia"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Rapid",
        subCategoryUrl: "rapid",
        path: `/category${"/skoda/rapid"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Superb",
        subCategoryUrl: "superb",
        path: `/category${"/skoda/superb"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Skoda",
        subCategoryUrl: "other_skoda",
        path: `/category${"/skoda/other_skoda"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "MG",
    categoryUrl: "mg",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "X5",
        subCategoryUrl: "x5",
        path: `/category${"/mg/x5"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Hector",
        subCategoryUrl: "hector",
        path: `/category${"/mg/hector"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Hector Plus",
        subCategoryUrl: "hector_plus",
        path: `/category${"/mg/hector_plus"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Gloster",
        subCategoryUrl: "gloster",
        path: `/category${"/mg/gloster"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Astor",
        subCategoryUrl: "astor",
        path: `/category${"/mg/astor"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "X6",
        subCategoryUrl: "x6",
        path: `/category${"/mg/x6"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other MG",
        subCategoryUrl: "other_mg",
        path: `/category${"/mg/other_mg"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Land Rover",
    categoryUrl: "land_rover",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "all land rover",
        subCategoryUrl: "all_land_rover",
        path: `/category${"/land_rover/all_land_rover"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Land Rover",
        subCategoryUrl: "other_land_rover",
        path: `/category${"/land_rover/other_land_rover"}`,

        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Audi",
    categoryUrl: "audi",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "Q7",
        subCategoryUrl: "q7",
        path: `/category${"/audi/q7"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Q5",
        subCategoryUrl: "q5",
        path: `/category${"/audi/q5"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Q3",
        subCategoryUrl: "q3",
        path: `/category${"/audi/q3"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "A6",
        subCategoryUrl: "a6",
        path: `/category${"/audi/a6"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "A4",
        subCategoryUrl: "a4",
        path: `/category${"/audi/a4"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "A3",
        subCategoryUrl: "a3",
        path: `/category${"/audi/a3"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "all audi",
        subCategoryUrl: "all_audi",
        path: `/category${"/audi/all_audi"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Audi",
        subCategoryUrl: "other_audi",
        path: `/category${"/audi/other_audi"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Volvo",
    categoryUrl: "volvo",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "all volvo",
        subCategoryUrl: "all_volvo",
        path: `/category${"/volvo/all_volvo"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "S60",
        subCategoryUrl: "s60",
        path: `/category${"/volvo/s60"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "S40",
        subCategoryUrl: "s40",
        path: `/category${"/volvo/s40"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "S90",
        subCategoryUrl: "s90",
        path: `/category${"/volvo/s90"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "S80",
        subCategoryUrl: "s80",
        path: `/category${"/volvo/s80"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Volvo",
        subCategoryUrl: "other_volvo",
        path: `/category${"/volvo/other_volvo"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Renault",
    categoryUrl: "renault",
    // path: "/reports",
    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "all renault",
        subCategoryUrl: "all_renault",
        path: `/category${"/renault/all_renault"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Clio",
        subCategoryUrl: "clio",
        path: `/category${"/renault/clio"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Megane",
        subCategoryUrl: "megane",
        path: `/category${"/renault/megane"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Renault",
        subCategoryUrl: "other_renault",
        path: `/category${"/renault/other_renault"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Jeep",
    categoryUrl: "jeep",

    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "all jeep",
        subCategoryUrl: "all_jeep",
        path: `/category${"/jeep/all_jeep"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Cherokee",
        subCategoryUrl: "cherokee",
        path: `/category${"/jeep/cherokee"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Wrangler",
        subCategoryUrl: "wrangler",
        path: `/category${"/jeep/wrangler"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Jeep",
        subCategoryUrl: "other_jeep",
        path: `/category${"/jeep/other_jeep"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Ford",
    categoryUrl: "ford",

    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "Freestyle",
        subCategoryUrl: "freestyle",
        path: `/category${"/ford/freestyle"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Figo Aspire",
        subCategoryUrl: "figo_aspire",
        path: `/category${"/ford/figo_aspire"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Figo",
        subCategoryUrl: "figo",
        path: `/category${"/ford/figo"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Endeavour",
        subCategoryUrl: "endeavour",
        path: `/category${"/ford/endeavour"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "EcoSport",
        subCategoryUrl: "ecosport",
        path: `/category${"/ford/ecosport"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "EcoSport",
        subCategoryUrl: "ecosport",
        path: `/category${"/ford/ecosport"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Ford",
        subCategoryUrl: "other_ford",
        path: `/category${"/ford/other_ford"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Jaguar",
    categoryUrl: "jaguar",

    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "other jaguar",
        subCategoryUrl: "other_jaguar",
        path: `/category${"/jaguar/other_jaguar"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "F-Type",
        subCategoryUrl: "f_type",
        path: `/category${"/jaguar/f_type"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "XF",
        subCategoryUrl: "xf",
        path: `/category${"/jaguar/xf"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "XJ",
        subCategoryUrl: "xj",
        path: `/category${"/jaguar/xj"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "XK",
        subCategoryUrl: "xk",
        path: `/category${"/jaguar/xk"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Other Car Models",
    categoryUrl: "other_car_models",

    icon: <FaHeartbeat />,
    subNav: [
      {
        title: "other car models",
        subCategoryUrl: "other_car_models",
        path: `/category${"/other_car_models/other_car_models"}`,
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
];
