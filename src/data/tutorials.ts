// 定义教程内容的接口
export interface TutorialSection {
  title: string;
  content: string;
  image?: string;
  code?: string;
}

export interface TutorialContent {
  introduction: string;
  sections: TutorialSection[];
  conclusion: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  author: string;
  publishDate: string;
  updateDate: string;
  coverImage?: string;
  content: TutorialContent;
  relatedTutorials?: string[];
}

// 教程数据
export const tutorials: Tutorial[] = [
  {
    id: "getting-started",
    title: "智能体基础入门",
    description: "了解什么是AI智能体，以及它们如何改变我们的工作和生活方式",
    category: "基础知识",
    difficulty: "初级",
    author: "雁鸣AI研习社",
    publishDate: "2024-01-01",
    updateDate: "2024-01-15",
    coverImage: "/images/tutorials/getting-started.jpg",
    content: {
      introduction: "AI智能体是一种能够感知环境并采取行动以实现特定目标的人工智能系统。本教程将帮助您了解AI智能体的基本概念、类型和应用场景。",
      sections: [
        {
          title: "什么是AI智能体？",
          content: "AI智能体是一种能够自主执行任务的智能软件系统。它们可以感知环境、做出决策并采取行动来实现预定目标。智能体的核心特征包括：自主性、响应性、主动性和社交性。",
          image: "/images/tutorials/ai-agent-concept.jpg"
        },
        {
          title: "智能体的类型",
          content: "智能体可以根据其功能和复杂度分为多种类型：\n- 简单反射型智能体\n- 基于模型的智能体\n- 基于目标的智能体\n- 基于效用的智能体\n每种类型都有其特定的应用场景和优势。"
        },
        {
          title: "应用场景",
          content: "AI智能体在各个领域都有广泛的应用：\n- 客户服务\n- 个人助理\n- 游戏AI\n- 自动化系统\n- 智能家居\n让我们通过具体案例来了解这些应用。",
          image: "/images/tutorials/ai-applications.jpg"
        }
      ],
      conclusion: "通过本教程，您已经了解了AI智能体的基本概念、类型和应用场景。这为进一步学习和应用智能体技术奠定了基础。在接下来的教程中，我们将深入探讨如何创建和优化您自己的智能体。"
    },
    relatedTutorials: ["create-first-agent", "prompt-engineering"]
  },
  {
    id: "create-first-agent",
    title: "从零开始构建智能体",
    description: "学习如何使用coze.cn平台创建您的第一个自定义智能体",
    category: "实践教程",
    difficulty: "初级",
    author: "雁鸣AI研习社",
    publishDate: "2024-01-05",
    updateDate: "2024-01-20",
    coverImage: "/images/tutorials/create-agent.jpg",
    content: {
      introduction: "创建您的第一个AI智能体是一个激动人心的过程。本教程将指导您使用coze.cn平台，从零开始构建一个功能完整的智能体。",
      sections: [
        {
          title: "准备工作",
          content: "在开始之前，您需要：\n1. 注册coze.cn账号\n2. 了解基本的提示词编写方法\n3. 确定智能体的功能定位",
          image: "/images/tutorials/preparation.jpg"
        },
        {
          title: "设计智能体角色",
          content: "一个好的智能体需要明确的角色定位：\n- 确定智能体的专业领域\n- 设计智能体的性格特征\n- 定义智能体的行为准则\n- 设置智能体的知识范围"
        },
        {
          title: "配置智能体",
          content: "在coze.cn平台上配置智能体：\n1. 创建新的智能体项目\n2. 编写智能体的系统提示词\n3. 设置智能体的基本参数\n4. 添加必要的插件和工具",
          image: "/images/tutorials/configuration.jpg",
          code: "// 示例：系统提示词模板\n你是一个专业的[领域]专家，擅长[特长]。\n在与用户交流时，你应该：\n1. [行为准则1]\n2. [行为准则2]\n3. [行为准则3]"
        }
      ],
      conclusion: "恭喜您完成了第一个智能体的创建！这只是开始，您可以通过不断测试和优化，使您的智能体变得更加智能和实用。下一步，建议您学习如何构建知识库，以增强智能体的专业能力。"
    },
    relatedTutorials: ["knowledge-base", "agent-optimization"]
  },
  {
    id: "prompt-engineering",
    title: "提示词工程入门",
    description: "掌握AI提示词编写技巧，提升模型输出质量",
    category: "提示词工程",
    difficulty: "中级",
    author: "雁鸣AI研习社",
    publishDate: "2024-01-10",
    updateDate: "2024-01-25",
    coverImage: "/images/tutorials/prompt-engineering.jpg",
    content: {
      introduction: "提示词工程是AI应用开发中的关键技能。本教程将介绍提示词编写的基本原则和高级技巧，帮助您提升AI模型的输出质量。",
      sections: [
        {
          title: "提示词的基本结构",
          content: "一个好的提示词通常包含以下要素：\n- 明确的指令\n- 上下文信息\n- 输出格式要求\n- 示例说明\n让我们通过实例来理解这些要素。",
          code: "// 基本提示词模板\n角色：[设定角色]\n任务：[具体任务]\n要求：[具体要求]\n格式：[输出格式]\n示例：[示例说明]"
        },
        {
          title: "提示词优化技巧",
          content: "提升提示词效果的关键技巧：\n1. 使用明确的动词和指令\n2. 提供充分的上下文\n3. 设置适当的约束条件\n4. 使用Few-shot示例\n5. 迭代优化提示词",
          image: "/images/tutorials/prompt-optimization.jpg"
        },
        {
          title: "常见问题和解决方案",
          content: "在提示词工程中常见的问题：\n- 输出不稳定\n- 内容偏离主题\n- 格式不规范\n- 回答不完整\n我们将通过具体案例来学习如何解决这些问题。"
        }
      ],
      conclusion: "通过本教程，您已经掌握了提示词工程的基础知识和优化技巧。这些技能将帮助您更好地控制AI模型的输出，创建更优质的智能体应用。建议您通过实践来巩固这些知识，并探索更多高级技巧。"
    },
    relatedTutorials: ["advanced-prompting", "create-first-agent"]
  }
];