"use client";
import { useMemo, useState } from "react";

const SNIPPETS = {
  "binary-search": {
    title: "Binary Search",
    difficulty: "Easy",
    concept: "Search in sorted array by halving the search space each step.",
    complexity: "Time: O(log n) · Space: O(1)",
    codeByLanguage: {
      javascript: `function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}`,
      python: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`,
      java: `class Solution {
  public int binarySearch(int[] nums, int target) {
    int left = 0, right = nums.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (nums[mid] == target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    return -1;
  }
}`,
      cpp: `int binarySearch(vector<int>& nums, int target) {
  int left = 0, right = (int)nums.size() - 1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (nums[mid] == target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}`,
    },
  },
  "two-sum": {
    title: "Two Sum (Hash Map)",
    difficulty: "Easy",
    concept: "Store visited numbers in a map and check complement in one pass.",
    complexity: "Time: O(n) · Space: O(n)",
    codeByLanguage: {
      javascript: `function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }

  return [];
}`,
      python: `def two_sum(nums, target):
    seen = {}

    for i, value in enumerate(nums):
      complement = target - value
      if complement in seen:
        return [seen[complement], i]
      seen[value] = i

    return []`,
      java: `class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (seen.containsKey(complement)) {
        return new int[] {seen.get(complement), i};
      }
      seen.put(nums[i], i);
    }

    return new int[] {};
  }
}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
  unordered_map<int, int> seen;

  for (int i = 0; i < (int)nums.size(); i++) {
    int complement = target - nums[i];
    if (seen.count(complement)) {
      return {seen[complement], i};
    }
    seen[nums[i]] = i;
  }

  return {};
}`,
    },
  },
  "merge-sort": {
    title: "Merge Sort",
    difficulty: "Medium",
    concept: "Divide array into halves, sort each half, then merge in order.",
    complexity: "Time: O(n log n) · Space: O(n)",
    codeByLanguage: {
      javascript: `function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}`,
      python: `def merge_sort(nums):
    if len(nums) <= 1:
        return nums

    mid = len(nums) // 2
    left = merge_sort(nums[:mid])
    right = merge_sort(nums[mid:])

    return merge(left, right)


def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    return result + left[i:] + right[j:]`,
      java: `class Solution {
  public int[] mergeSort(int[] nums) {
    if (nums.length <= 1) return nums;

    int mid = nums.length / 2;
    int[] left = Arrays.copyOfRange(nums, 0, mid);
    int[] right = Arrays.copyOfRange(nums, mid, nums.length);

    return merge(mergeSort(left), mergeSort(right));
  }

  private int[] merge(int[] left, int[] right) {
    int[] merged = new int[left.length + right.length];
    int i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) merged[k++] = left[i++];
      else merged[k++] = right[j++];
    }

    while (i < left.length) merged[k++] = left[i++];
    while (j < right.length) merged[k++] = right[j++];

    return merged;
  }
}`,
      cpp: `vector<int> mergeSort(vector<int> nums) {
  if (nums.size() <= 1) return nums;

  int mid = nums.size() / 2;
  vector<int> left(nums.begin(), nums.begin() + mid);
  vector<int> right(nums.begin() + mid, nums.end());

  left = mergeSort(left);
  right = mergeSort(right);

  vector<int> merged;
  int i = 0, j = 0;

  while (i < (int)left.size() && j < (int)right.size()) {
    if (left[i] <= right[j]) merged.push_back(left[i++]);
    else merged.push_back(right[j++]);
  }

  while (i < (int)left.size()) merged.push_back(left[i++]);
  while (j < (int)right.size()) merged.push_back(right[j++]);

  return merged;
}`,
    },
  },
};

const LANGUAGE_LABELS = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
};

export default function CodeLabSection() {
  const [algorithmKey, setAlgorithmKey] = useState("binary-search");
  const [language, setLanguage] = useState("javascript");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selected = useMemo(() => SNIPPETS[algorithmKey], [algorithmKey]);

  const onAskGemini = async () => {
    if (!question.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/code-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          algorithm: selected.title,
          language: LANGUAGE_LABELS[language],
          code: selected.codeByLanguage[language],
          question: question.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Could not get Gemini response");
      }

      setAnswer(data.response || "No response from Gemini.");
    } catch (err) {
      setError(err.message);
      setAnswer("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="code-lab" className="relative py-24 sm:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <span className="tag bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.15)] text-[#a78bfa] mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
            Multi-language DSA Lab
          </span>
          <h2 className="section-heading mt-6">
            Learn DSA Through <span className="gradient-text">Real Code</span>
          </h2>
          <p className="text-[#7b7b9e] mt-5 max-w-3xl mx-auto text-[14px] sm:text-[15px] leading-relaxed tracking-tight">
            Explore the same algorithm in JavaScript, Python, Java, and C++. Ask Gemini exactly where you are stuck and get beginner-friendly explanation for the code you are viewing.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr] gap-6 sm:gap-7">
          <div className="glass-card p-6 sm:p-7 !hover:transform-none">
            <div className="flex flex-wrap gap-2.5 mb-5">
              {Object.entries(SNIPPETS).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setAlgorithmKey(key)}
                  className={`px-3.5 py-2 rounded-full text-[12px] font-semibold border transition-all ${
                    algorithmKey === key
                      ? "bg-[rgba(124,92,252,0.16)] text-white border-[rgba(124,92,252,0.4)]"
                      : "bg-[rgba(124,92,252,0.04)] text-[#a1a1c3] border-[rgba(124,92,252,0.14)] hover:text-white"
                  }`}
                >
                  {value.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold tracking-tight">{selected.title}</h3>
                <p className="text-[12px] text-[#9a9abc] mt-1">{selected.concept}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[rgba(34,211,238,0.1)] text-[#67e8f9] uppercase tracking-wider font-semibold">
                  {selected.difficulty}
                </span>
                <span className="text-[11px] text-[#8f8fb2]">{selected.complexity}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {Object.keys(LANGUAGE_LABELS).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border transition-all ${
                    language === lang
                      ? "bg-[rgba(34,211,238,0.15)] text-[#67e8f9] border-[rgba(34,211,238,0.35)]"
                      : "bg-[rgba(124,92,252,0.04)] text-[#a1a1c3] border-[rgba(124,92,252,0.12)] hover:text-white"
                  }`}
                >
                  {LANGUAGE_LABELS[lang]}
                </button>
              ))}
            </div>

            <pre className="text-[12px] sm:text-[13px] leading-relaxed font-mono text-[#d1d1e4] bg-[rgba(8,8,18,0.8)] rounded-2xl p-5 overflow-x-auto border border-[rgba(124,92,252,0.1)]">
              {selected.codeByLanguage[language]}
            </pre>
          </div>

          <div className="glass-card p-6 sm:p-7 !hover:transform-none">
            <h3 className="text-lg font-bold tracking-tight mb-2">Ask Gemini about this code</h3>
            <p className="text-[12px] text-[#8f8fb2] mb-4">
              Ask doubts like “why map is used here?”, “dry run this input”, or “how to optimize this”.
            </p>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Example: Can you dry run this with nums = [1,3,7,10] and target = 7?"
              className="premium-input w-full min-h-28 resize-y"
            />

            <button
              onClick={onAskGemini}
              disabled={!question.trim() || loading}
              className="glow-btn glow-btn-primary text-[13px] w-full mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Asking Gemini..." : "Ask Gemini"}
            </button>

            {error && (
              <p className="text-[12px] text-[#fca5a5] mt-3">{error}</p>
            )}

            <div className="mt-4 rounded-2xl border border-[rgba(124,92,252,0.12)] bg-[rgba(8,8,18,0.72)] min-h-[180px] p-4">
              {answer ? (
                <p className="text-[13px] text-[#d1d1e4] whitespace-pre-wrap leading-relaxed">{answer}</p>
              ) : (
                <p className="text-[12px] text-[#727296] leading-relaxed">
                  Gemini explanation will appear here. Try questions about logic, complexity, edge cases, or language-specific syntax.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
