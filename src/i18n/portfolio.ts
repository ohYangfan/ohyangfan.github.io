import {Languages} from './types.ts'

interface Content {
    mcspTitle: string,
    mlhvlTitle: string,
    mvisTitle: string,
    mqlmTitle: string,
    mmmiTitle: string,
    mitiTitle: string,
    mqnmTitle: string,
    mmobTitle: string,
    mdmTitle: string,
    mrTitle: string,
    magrTitle: string,
    mcvTitle: string,

    title: string,
    contentTitle: string,
    coursesTitle: string,
    firstYearTitle: string,
    secondYearTitle: string,
}

export const portfolioMsg : Record<Languages, Content> = {
    en: {
        mcspTitle: 'Advanced cognitive and social psychology for HCI',
        mlhvlTitle: 'Machine learning for human vision and language',
        mvisTitle: 'Information Visualization',
        mqlmTitle: 'Advanced HCI qualitative research methods',
        mmmiTitle: 'Multimodal Interaction',
        mitiTitle: 'Interaction technology innovation',
        mqnmTitle: 'Advanced HCI quantitative research methods',
        mmobTitle: 'Mobile Interaction',
        mdmTitle: 'Data Mining',
        mrTitle: 'Multimedia Retrieval',
        magrTitle: 'Advanced Computer Graphics',
        mcvTitle: 'Computer Vision',
        firstYearTitle: 'First Year',
        secondYearTitle: 'Second Year (upcoming)',
        title: 'Study Plan for Utrecht University\'s HCI program',
        contentTitle: 'Table of Contents',
        coursesTitle: 'Course detail and reflection',
    },
    zh: {
        mcspTitle: '面向HCI的认知与社会心理学 (Advanced cognitive and social psychology for HCI)',
        mlhvlTitle: '面向人类视觉与语言的机器学习 (Machine learning for human vision and language)',
        mvisTitle: '信息可视化 (Information Visualization)',
        mqlmTitle: '高级HCI定性研究方法 (Advanced HCI qualitative research methods)',
        mmmiTitle: '多模态交互 (Multimodal Interaction)',
        mitiTitle: '交互技术创新 (Interaction technology innovation)',
        mqnmTitle: '高级HCI定量研究方法 (Advanced HCI quantitative research methods)',
        mmobTitle: '移动交互 (Mobile Interaction)',
        mdmTitle: '数据挖掘 (Data Mining)',
        mrTitle: '多媒体检索 (Multimedia Retrieval)',
        magrTitle: '高级计算机图形学 (Advanced Computer Graphics)',
        mcvTitle: '计算机视觉 (Computer Vision)',
        firstYearTitle: '第一年',
        secondYearTitle: '第二年（计划）',
        title: 'Utrecht University HCI 项目课程计划',
        contentTitle: '目录',
        coursesTitle: '课程详情',
    }
}