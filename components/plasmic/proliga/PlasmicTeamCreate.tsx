// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Dg7NemWYQFk2

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
import Clubs2 from "../../Clubs2"; // plasmic-import: 3EueAFP_3sEI/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicTeamCreate.module.css"; // plasmic-import: Dg7NemWYQFk2/css

createPlasmicElementProxy;

export type PlasmicTeamCreate__VariantMembers = {};
export type PlasmicTeamCreate__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeamCreate__VariantsArgs;
export const PlasmicTeamCreate__VariantProps = new Array<VariantPropType>();

export type PlasmicTeamCreate__ArgsType = {};
type ArgPropType = keyof PlasmicTeamCreate__ArgsType;
export const PlasmicTeamCreate__ArgProps = new Array<ArgPropType>();

export type PlasmicTeamCreate__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  clubs2?: Flex__<typeof Clubs2>;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultTeamCreateProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeamCreate__RenderFunc(props: {
  variants: PlasmicTeamCreate__VariantsArgs;
  args: PlasmicTeamCreate__ArgsType;
  overrides: PlasmicTeamCreate__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "157523a8-a564-4845-81d4-23951d76d034",
        userArgs: {},
        cacheKey: `plasmic.$.157523a8-a564-4845-81d4-23951d76d034.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    users: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "9a1adef8-8556-4564-92b3-a70c99007516",
        userArgs: {},
        cacheKey: `plasmic.$.9a1adef8-8556-4564-92b3-a70c99007516.$.`,
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

          <Clubs2
            data-plasmic-name={"clubs2"}
            data-plasmic-override={overrides.clubs2}
            className={classNames("__wab_instance", sty.clubs2)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hGgdd
            )}
          >
            {"CHOOSE YOUR TEAM"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__nuk3S)}>
            <div className={classNames(projectcss.all, sty.freeBox___2LZzQ)}>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.query.data;
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
                  <div
                    className={classNames(projectcss.all, sty.freeBox__wVYvJ)}
                    key={currentIndex}
                    onClick={async event => {
                      const $steps = {};

                      $steps["invokeGlobalAction"] = true
                        ? (() => {
                            const actionArgs = {
                              args: [
                                "success",
                                (() => {
                                  try {
                                    return (
                                      currentItem.name + " Team Created!!! "
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })(),
                                undefined,
                                5
                              ]
                            };
                            return $globalActions[
                              "plasmic-antd5-config-provider.showNotification"
                            ]?.apply(null, [...actionArgs.args]);
                          })()
                        : undefined;
                      if (
                        $steps["invokeGlobalAction"] != null &&
                        typeof $steps["invokeGlobalAction"] === "object" &&
                        typeof $steps["invokeGlobalAction"].then === "function"
                      ) {
                        $steps["invokeGlobalAction"] = await $steps[
                          "invokeGlobalAction"
                        ];
                      }

                      $steps["postgresCreate"] = true
                        ? (() => {
                            const actionArgs = {
                              dataOp: {
                                sourceId: "8cdHi4ivRUEkK6qbegQevF",
                                opId: "0bc71cbc-a7d0-4760-8b48-8bbd46159b26",
                                userArgs: {
                                  variables: [currentItem.name, currentItem.id]
                                },
                                cacheKey: null,
                                invalidatedKeys: ["plasmic_refresh_all"],
                                roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
                              }
                            };
                            return (async ({ dataOp, continueOnError }) => {
                              try {
                                const response = await executePlasmicDataOp(
                                  dataOp,
                                  {
                                    userAuthToken:
                                      dataSourcesCtx?.userAuthToken,
                                    user: dataSourcesCtx?.user
                                  }
                                );
                                await plasmicInvalidate(dataOp.invalidatedKeys);
                                return response;
                              } catch (e) {
                                if (!continueOnError) {
                                  throw e;
                                }
                                return e;
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["postgresCreate"] != null &&
                        typeof $steps["postgresCreate"] === "object" &&
                        typeof $steps["postgresCreate"].then === "function"
                      ) {
                        $steps["postgresCreate"] = await $steps[
                          "postgresCreate"
                        ];
                      }

                      $steps["goToTeams2Market"] = true
                        ? (() => {
                            const actionArgs = { destination: `/new-page` };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToTeams2Market"] != null &&
                        typeof $steps["goToTeams2Market"] === "object" &&
                        typeof $steps["goToTeams2Market"].then === "function"
                      ) {
                        $steps["goToTeams2Market"] = await $steps[
                          "goToTeams2Market"
                        ];
                      }
                    }}
                  >
                    <PlasmicImg__
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={(() => {
                        try {
                          return currentItem.flag_url;
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
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__s4CVb
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return currentItem.name;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "clubs2", "img"],
  navbar: ["navbar"],
  clubs2: ["clubs2"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  clubs2: typeof Clubs2;
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamCreate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamCreate__VariantsArgs;
    args?: PlasmicTeamCreate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamCreate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamCreate__ArgsType,
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
          internalArgPropNames: PlasmicTeamCreate__ArgProps,
          internalVariantPropNames: PlasmicTeamCreate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeamCreate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamCreate";
  } else {
    func.displayName = `PlasmicTeamCreate.${nodeName}`;
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

export const PlasmicTeamCreate = Object.assign(
  // Top-level PlasmicTeamCreate renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    clubs2: makeNodeComponent("clubs2"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicTeamCreate
    internalVariantProps: PlasmicTeamCreate__VariantProps,
    internalArgProps: PlasmicTeamCreate__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTeamCreate;
/* prettier-ignore-end */
