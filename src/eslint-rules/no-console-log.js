export const noConsoleLogRule = {
  meta: {
    type: "problem",
    docs: {
      description: "Запрещает использование console.log",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
    messages: {
      unexpected: "Использование console.log запрещено проектными правилами.",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object?.name === "console" &&
          node.callee.property?.name === "log"
        ) {
          context.report({
            node,
            messageId: "unexpected",
          });
        }
      },
    };
  },
};