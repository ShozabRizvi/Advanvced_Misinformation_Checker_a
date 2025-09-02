import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Upload, FileText, CheckCircle, 
  XCircle, AlertTriangle, Loader 
} from 'lucide-react';

const VerifySection = () => {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeText = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        score: Math.random(),
        confidence: 85 + Math.random() * 15,
        sources: 3 + Math.floor(Math.random() * 5)
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getResultColor = (score) => {
    if (score > 0.8) return 'text-green-600';
    if (score > 0.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getResultIcon = (score) => {
    if (score > 0.8) return CheckCircle;
    if (score > 0.5) return AlertTriangle;
    return XCircle;
  };

  const getResultText = (score) => {
    if (score > 0.8) return 'Highly Credible';
    if (score > 0.5) return 'Needs Verification';
    return 'Potentially False';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Search className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Information Verification
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Use advanced AI to verify the credibility and accuracy of information in real-time
        </p>
      </motion.div>

      {/* Main Analysis Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="space-y-6">
          {/* Input Area */}
          <div>
            <label htmlFor="verify-text" className="block text-sm font-medium text-gray-700 mb-2">
              Enter text to verify
            </label>
            <textarea
              id="verify-text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste the information you want to verify here..."
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none text-base"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={analyzeText}
              disabled={isAnalyzing || !inputText.trim()}
              className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 min-h-[48px]"
            >
              {isAnalyzing ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Verify Information</span>
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 min-h-[48px]"
            >
              <Upload className="h-5 w-5" />
              <span>Upload File</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Results Section */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Verification Results</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Credibility Score */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className={`text-3xl font-bold mb-2 ${getResultColor(result.score)}`}>
                {Math.round(result.score * 100)}%
              </div>
              <div className="text-sm text-gray-600">Credibility Score</div>
            </div>

            {/* Status */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className={`flex justify-center mb-2 ${getResultColor(result.score)}`}>
                {React.createElement(getResultIcon(result.score), { className: "h-8 w-8" })}
              </div>
              <div className={`font-semibold ${getResultColor(result.score)}`}>
                {getResultText(result.score)}
              </div>
            </div>

            {/* Sources */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {result.sources}
              </div>
              <div className="text-sm text-gray-600">Sources Checked</div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Analysis Summary
            </h4>
            <p className="text-blue-800 text-sm">
              Based on our AI analysis of {result.sources} verified sources, this information has a 
              credibility score of {Math.round(result.score * 100)}% with {Math.round(result.confidence)}% confidence. 
              {result.score > 0.8 && " The information appears to be highly credible and well-supported by reliable sources."}
              {result.score <= 0.8 && result.score > 0.5 && " The information requires additional verification from more sources."}
              {result.score <= 0.5 && " The information shows signs of potential misinformation or lacks credible sources."}
            </p>
          </div>
        </motion.div>
      )}

      {/* How it Works */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: '1',
              title: 'Submit Information',
              description: 'Enter text or upload documents for analysis'
            },
            {
              step: '2',
              title: 'AI Analysis',
              description: 'Our AI checks against verified sources and databases'
            },
            {
              step: '3',
              title: 'Get Results',
              description: 'Receive credibility scores and detailed verification reports'
            }
          ].map((item, index) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VerifySection;
