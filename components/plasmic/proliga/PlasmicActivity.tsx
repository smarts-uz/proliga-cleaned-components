// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: IyS4U3yaVhR8

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import UserActivity from "../../UserActivity"; // plasmic-import: JFWOLtBypZOZ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicActivity.module.css"; // plasmic-import: IyS4U3yaVhR8/css

createPlasmicElementProxy;

export type PlasmicActivity__VariantMembers = {};
export type PlasmicActivity__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivity__VariantsArgs;
export const PlasmicActivity__VariantProps = new Array<VariantPropType>();

export type PlasmicActivity__ArgsType = {};
type ArgPropType = keyof PlasmicActivity__ArgsType;
export const PlasmicActivity__ArgProps = new Array<ArgPropType>();

export type PlasmicActivity__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  _1?: Flex__<"div">;
  userActivity?: Flex__<typeof UserActivity>;
};

export interface DefaultActivityProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivity__RenderFunc(props: {
  variants: PlasmicActivity__VariantsArgs;
  args: PlasmicActivity__ArgsType;
  overrides: PlasmicActivity__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const dataSourcesCtx = usePlasmicDataSourceContext();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    userActivity: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "c9b89f13-1dad-4e63-be13-fdc5eada11c7",
        userArgs: {},
        cacheKey: `plasmic.$.c9b89f13-1dad-4e63-be13-fdc5eada11c7.$.`,
        invalidatedKeys: null,
        roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"_1"}
            data-plasmic-override={overrides._1}
            className={classNames(projectcss.all, sty._1)}
          />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__h6A4W)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___0Uva0)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wtbrH
                )}
              >
                {"1"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__aSxCm)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zPo2K
                )}
              >
                {"2"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__yzp16)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wNy
                )}
              >
                {"3"}
              </div>
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z9Kds)}
          >
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $queries.userActivity.data;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <UserActivity
                  data-plasmic-name={"userActivity"}
                  data-plasmic-override={overrides.userActivity}
                  activity={(() => {
                    try {
                      return currentItem.activity;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  className={classNames("__wab_instance", sty.userActivity)}
                  key={currentIndex}
                />
              );
            })}
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "_1", "userActivity"],
  navbar: ["navbar"],
  _1: ["_1"],
  userActivity: ["userActivity"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  _1: "div";
  userActivity: typeof UserActivity;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivity__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivity__VariantsArgs;
    args?: PlasmicActivity__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivity__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivity__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicActivity__ArgProps,
          internalVariantPropNames: PlasmicActivity__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivity__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivity";
  } else {
    func.displayName = `PlasmicActivity.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"}
      appId={"tDWy3GXn2mzd9e2xUaPdmu"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "tDWy3GXn2mzd9e2xUaPdmu"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicActivity = Object.assign(
  // Top-level PlasmicActivity renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    _1: makeNodeComponent("_1"),
    userActivity: makeNodeComponent("userActivity"),

    // Metadata about props expected for PlasmicActivity
    internalVariantProps: PlasmicActivity__VariantProps,
    internalArgProps: PlasmicActivity__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicActivity;
/* prettier-ignore-end */
