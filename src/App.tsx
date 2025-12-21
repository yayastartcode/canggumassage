import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 space-y-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Welcome to Your App
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-slate-600 dark:text-slate-300"
          >
            Built with Vite, React, TypeScript, Tailwind CSS, Motion, and Shadcn UI
          </motion.p>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setCount(count - 1)}
                variant="outline"
                size="lg"
              >
                Decrement
              </Button>

              <motion.div
                key={count}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl font-bold text-slate-800 dark:text-slate-100 min-w-[100px] text-center"
              >
                {count}
              </motion.div>

              <Button
                onClick={() => setCount(count + 1)}
                size="lg"
              >
                Increment
              </Button>
            </div>

            <Button
              onClick={() => setCount(0)}
              variant="secondary"
            >
              Reset Counter
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm"
          >
            {[
              { name: 'Vite', color: 'from-purple-500 to-blue-500' },
              { name: 'React', color: 'from-blue-400 to-cyan-400' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
              { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-500' },
              { name: 'Motion', color: 'from-purple-600 to-pink-600' },
              { name: 'Shadcn UI', color: 'from-slate-700 to-slate-500' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`bg-gradient-to-r ${tech.color} text-white rounded-lg p-3 font-medium`}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default App
