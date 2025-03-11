export const agents = [
  {
    name: "扣子 - 智能客服",
    description: "专为企业设计的智能客服解决方案，支持多轮对话、知识库管理和情感识别。",
    source: "coze.cn",
    status: "已上线",
    color: "from-indigo-500 to-purple-500",
    icon: "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z\"></path>",
    features: ["多轮对话", "知识库管理", "情感识别", "自动回复"],
    category: "客服"
  },
  {
    name: "DeepSeek 思考者",
    description: "基于大模型的智能研究助手，擅长深度思考、多维度分析和学术研究支持。",
    source: "DeepSeek",
    status: "已上线",
    color: "from-blue-500 to-cyan-500",
    icon: "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z\"></path>",
    features: ["深度思考", "多维度分析", "学术研究", "文献综述"],
    category: "研究"
  },
  {
    name: "文心一言 创作助手",
    description: "专业的AI创作助手，支持多种文本类型的创作，包括文案、故事、诗歌等。",
    source: "百度",
    status: "已上线",
    color: "from-green-500 to-teal-500",
    icon: "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\"></path>",
    features: ["多类型创作", "智能润色", "风格转换", "创意激发"],
    category: "创作"
  },
  {
    name: "智谱清言",
    description: "基于ChatGLM大模型的对话式AI助手，擅长中文理解和生成，支持多领域应用。",
    source: "智谱AI",
    status: "已上线",
    color: "from-purple-500 to-pink-500",
    icon: "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M8 9.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12.25 8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM17.5 9.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z\"></path>",
    features: ["中文理解", "知识问答", "任务助手", "多领域支持"],
    category: "助手"
  },
  {
    name: "讯飞星火认知",
    description: "强大的认知智能系统，整合语音识别、自然语言处理和知识图谱等技术。",
    source: "科大讯飞",
    status: "已上线",
    color: "from-red-500 to-orange-500",
    icon: "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z\"></path>",
    features: ["语音交互", "知识推理", "多模态理解", "场景适配"],
    category: "认知"
  },
  {
    name: "通义千问 金融助手",
    description: "专注于金融领域的智能助手，提供市场分析、投资建议和风险评估等服务。",
    source: "阿里云",
    status: "已上线",
    color: "from-yellow-500 to-orange-500",
    icon: "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z\"></path>",
    features: ["市场分析", "投资建议", "风险评估", "财务规划"],
    category: "金融"
  }
];