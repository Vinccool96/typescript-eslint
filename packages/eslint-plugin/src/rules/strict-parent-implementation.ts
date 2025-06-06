import type { TSESTree } from '@typescript-eslint/utils';
import ts from 'typescript';

import { createRule, getParserServices } from '../util';

export type MessageIds = 'narrowParameter' | 'narrowProperty';

export default createRule<[], MessageIds>({
  name: 'strict-parent-implementation',
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce  that class method parameters and properties are at least as wide a type as their inherited class equivalents',
      recommended: 'strict',
      requiresTypeChecking: true,
    },
    messages: {
      narrowParameter: 'strict',
      narrowProperty: 'strict',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    const services = getParserServices(context);
    const checker = services.program.getTypeChecker();

    return {
      'MethodDefinition > FunctionExpression > Identifier'(
        paramIdentifier: TSESTree.Identifier,
      ): void {
        const tsParamIdentifier =
          services.esTreeNodeToTSNodeMap.get(paramIdentifier);
        const tsParameter = getParameter(tsParamIdentifier as ts.Identifier);
        const parameterType = services.getTypeAtLocation(paramIdentifier);
        const a = 1 + 2;
      },
      TSPropertySignature(propertyNode): void {},
    };
  },
});

function getParameter(
  identifier: ts.Identifier,
): ts.ParameterDeclaration | null {
  const parent = identifier.parent;

  if (parent.kind !== ts.SyntaxKind.Parameter) {
    return null;
  }

  return parent as ts.ParameterDeclaration;
}
