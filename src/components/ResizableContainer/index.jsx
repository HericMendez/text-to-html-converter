import { editorOptions } from "./editorData";
import { Panel, PanelGroup } from "react-resizable-panels";

import { useState, useEffect, useRef } from "react";
import SunEditor from "suneditor-react";

import formatHTML from "../../utils/formatHTML";
import useWindowDimensions from "../../hooks/useWindowimensions";

import ResizeHandle from "./ResizeHandle";
import { textExamples } from "./editorData";
import styles from "./styles.module.css";
import { Tabs, Tab } from "react-bootstrap";

const ResizableContainer = () => {
  const editorRef = useRef();
  const contentRef = useRef();
  const { orientation } = useWindowDimensions();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(formatHTML(value));
    alert("copiado para a área de transferência!");
  };

  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(editorRef.current.editor);
  }, []);

  const onImageUploadError = (errorMessage, result, core) => {
    alert(errorMessage);
    core.noticeOpen(errorMessage);
    return false;
  };

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = value;
  }, [value]);
  console.log(contentRef);

  const onChangeHandler = (content) => {
    console.log(content);
    setValue(content);
  };

  return (
    <div className={styles.Container}>
      <PanelGroup direction={orientation}>
        <Panel className={styles.Panel} defaultSize={60} order={1}>
          <div id="text-editor" className={styles.PanelContent}>
            <SunEditor
              ref={editorRef}
              height={"70vh"}
              setOptions={editorOptions}
              lang="pt-br"
              setContents={textExamples.htmlBasic2}
              onCopy={(e) => console.log(e)}
              onImageUploadError={onImageUploadError}
              onChange={onChangeHandler}
            />
          </div>
        </Panel>

        <ResizeHandle
          direction={orientation === "horizontal" ? "vertical" : "horizontal"}
        />

        <Panel className={styles.Panel} defaultSize={40} order={2}>
          <PanelGroup className={styles.Panel} direction="vertical">
            {orientation === "horizontal" ? (
              <>
                <Panel defaultSize={60} order={1} className={styles.Panel}>
                  <div
                    style={{ overflowY: "scroll", padding: 10 }}
                    id="text-preview"
                    className={styles.PanelContent}
                  >
                    <div ref={contentRef}></div>
                  </div>
                </Panel>
                <ResizeHandle direction="horizontal" />
                <Panel order={2} className={styles.Panel} defaultSize={40}>
                  <div className={styles.PanelContent}>
                    <button
                      style={{
                        position: "absolute",
                        right: 0,
                        marginRight: 30,
                        marginTop: 10,
                      }}
                      onClick={handleCopyClick}
                    >
                      Copy
                    </button>
                    <textarea
                      defaultValue={formatHTML(value)}
                      style={{
                        backgroundColor: "#222",
                        color: "#fff",
                        width: "100%",
                        overflowY: "scroll",
                      }}
                    />
                  </div>
                </Panel>
              </>
            ) : (
              <>
                <Tabs>
                  <Tab
                    eventKey="preview"
                    title="Preview"
                    mountOnEnter // <<<
                    unmountOnExit={false} // <<<div
                  >
                    <Panel order={1} className={styles.Panel}>
                      <div
                        style={{
                          overflowY: "scroll",
                          padding: 10,
                          maxHeight: "60vh",
                        }}
                        id="text-preview"
                        className={styles.PanelContent}
                      >
                        <div ref={contentRef}></div>
                      </div>
                    </Panel>
                  </Tab>

                  <Tab
                    eventKey="code"
                    title="Code"
                    mountOnEnter // <<<
                    unmountOnExit={false} // <<<
                  >
                    <Panel className={styles.Panel}>
                      <div className={styles.PanelContent}>
                        <button
                          style={{
                            position: "absolute",
                            right: 0,
                            marginRight: 30,
                            marginTop: 10,
                          }}
                          onClick={handleCopyClick}
                        >
                          Copy
                        </button>
                        <textarea
                          defaultValue={formatHTML(value)}
                          style={{
                            backgroundColor: "#222",
                            color: "#fff",
                            width: "100%",
                            height: "60vh",
                            overflowY: "scroll",
                          }}
                        ></textarea>
                      </div>
                    </Panel>
                  </Tab>
                </Tabs>
              </>
            )}
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResizableContainer;
