"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Modal, { RetroButton } from "../Modal";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface DirectoryItemProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  lastModified?: string;
  size?: string;
  type?: string;
  content?: string | React.ComponentType;
  link?: string;
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({
  label,
  icon: Icon,
  children,
  defaultOpen = false,
  lastModified,
  size,
  type,
  content,
  link
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showModal, setShowModal] = useState(false);
  const hasChildren = children && React.Children.count(children) > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else if (link) {
      window.open(link, '_blank');
    } else if (content) {
      setShowModal(true);
    }
  };

  const renderContent = () => {
    if (!content) return null;

    switch (type) {
      case "JSON":
      case "Python":
      case "C++":
        return (
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <code>{content as string}</code>
          </pre>
        );
      
      case "Markdown":
        return (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // Customize markdown components if needed
                h1: (props) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                h2: (props) => <h2 className="text-xl font-bold mb-3" {...props} />,
                h3: (props) => <h3 className="text-lg font-bold mb-2" {...props} />,
                p: (props) => <p className="mb-4" {...props} />,
                ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                li: (props) => <li className="mb-1" {...props} />,
                code: ({ inline, ...props }) => 
                  inline ? (
                    <code className="bg-gray-100 px-1 rounded" {...props} />
                  ) : (
                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                      <code {...props} />
                    </pre>
                  )
              }}
            >
              {content as string}
            </ReactMarkdown>
          </div>
        );
      
      case "HTML":
        const Component = content as React.ComponentType;
        return <Component />;
      
      default:
        return (
          <div className="whitespace-pre-wrap font-mono">
            {content as string}
          </div>
        );
    }
  };

  return (
    <div className="ml-2">
      <div
        className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer group"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 flex-1">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          ) : (
            <div className="w-4" />
          )}
          <Icon className="w-4 h-4 text-black-600" />
          <span className="group-hover:text-blue-600 min-w-[200px]">
            {label}
          </span>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <span className="w-24">{type}</span>
          <span className="w-24 text-right">{size}</span>
          <span className="w-32">{lastModified}</span>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={label}
        footer={
          <RetroButton onClick={() => setShowModal(false)}>
            Close
          </RetroButton>
        }
      >
        <div className="max-w-none">
          {renderContent()}
        </div>
      </Modal>

      {isOpen && children && (
        <div className="ml-4 border-l border-slate-200">{children}</div>
      )}
    </div>
  );
};

export default DirectoryItem;